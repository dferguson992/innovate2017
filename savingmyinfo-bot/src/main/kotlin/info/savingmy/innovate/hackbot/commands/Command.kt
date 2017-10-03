package info.savingmy.innovate.hackbot.commands

import info.savingmy.innovate.hackbot.SavingInfoBot
import info.savingmy.innovate.hackbot.build
import org.symphonyoss.symphony.clients.model.SymMessage
import org.symphonyoss.symphony.clients.model.SymStream

enum class Command(val description: String, val requireDirect: Boolean, vararg val command: String)
{
    BOOKMARK("Bookmark messages", false, "bookmark", "bm", "save")
    {
        override fun onCommand(from: Long, stream: SymStream, bot: SavingInfoBot, vararg args: String)
        {
            if (args.size == 1)
                bot.client.messagesClient.sendMessage(stream, SymMessage().build(
                        SymMessage.Format.MESSAGEML,
                        "<div data-format=\"PresentationML\" data-version=\"2.0\">" + (bot.messagesPerStream[stream.streamId]
                                ?.joinToString("<br />") { it.message }
                        ?: "No messages found in stream") + "</div>"))
        }
    },
    LIST("List your bookmarks", true, "list", "listbookmarks", "ls", "bookmarks")
    {
        override fun onCommand(from: Long, stream: SymStream, bot: SavingInfoBot, vararg args: String)
        {
        }
    },
    TAG("Manage tags applied to a bookmark", true, "tag", "update")
    {
        override fun onCommand(from: Long, stream: SymStream, bot: SavingInfoBot, vararg args: String)
        {
        }
    },
    DELETE("Delete a saved bookmark", true, "delete", "rm", "remove")
    {
        override fun onCommand(from: Long, stream: SymStream, bot: SavingInfoBot, vararg args: String)
        {

        }
    },
    HELP("Help information about the bot", true, "help", "h", "commands")
    {
        override fun onCommand(from: Long, stream: SymStream, bot: SavingInfoBot, vararg args: String)
        {
            val messageToSend = SymMessage().build(
                    SymMessage.Format.MESSAGEML,
                    "<div data-format=\"PresentationML\" data-version=\"2.0\"><b>Available Commands</b>:<br /><ul>${Command.values()
                            .joinToString(separator = "") { "<li><b>${it.command.first()}${if (it.requireDirect) " (Direct only)" else ""}</b>: ${it.description}</li>" }}</ul></div>")
            bot.client.messagesClient.sendMessage(stream, messageToSend)
        }
    };

    abstract fun onCommand(from: Long, stream: SymStream, bot: SavingInfoBot, vararg args: String)

    companion object
    {
        fun getCommand(command: String): Command
        {
            return values().singleOrNull { it.command.contains(command) } ?: HELP
        }

        fun runCommand(message: SymMessage, bot: SavingInfoBot)
        {
            val commandParms = message.messageText.substring(1).split(" ", ignoreCase = true).toTypedArray()
            commandParms.firstOrNull()?.let { getCommand(it).onCommand(message.fromUserId, message.stream, bot, *commandParms) }
        }
    }
}
