package info.savingmy.innovate.hackbot

import info.savingmy.innovate.hackbot.commands.Command
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.symphonyoss.client.SymphonyClient
import org.symphonyoss.client.SymphonyClientConfig
import org.symphonyoss.client.SymphonyClientFactory
import org.symphonyoss.client.services.MessageListener
import org.symphonyoss.symphony.clients.model.SymMessage

/**
 * Savingmy.info bot for Symphony Innovate 2017 Hackathon
 */
class SavingInfoBot : MessageListener
{
    val client : SymphonyClient = SymphonyClientFactory.getClient(SymphonyClientFactory.TYPE.V4, SymphonyClientConfig())
    val messagesPerStream: MutableMap<String, MutableList<SymMessage>> = mutableMapOf()

    init
    {
        // register ourselves as a message listener
        client.messageService.addMessageListener(this)
    }

    /**
     * Respond to bot requests
     */
    override fun onMessage(message: SymMessage)
    {
        // executing a command
        if (message.messageText.startsWith('!'))
        {
            Command.runCommand(message, this)
        }
        else if (message.fromUserId != client.localUser.id)
        {
            Command.HELP.onCommand(message.fromUserId, message.stream, this)
            val messagesInRoom = messagesPerStream.getOrPut(message.streamId) { mutableListOf() }
            messagesInRoom.add(message)

            if (messagesInRoom.size > 10)
                messagesInRoom.removeAt(0)
        }
    }

    companion object
    {
        val logger: Logger = LoggerFactory.getLogger(SavingInfoBot::class.java)
    }
}

/**
 * Start
 */
fun main(vararg args: String)
{
    SavingInfoBot()
}

fun SymMessage.build(format: SymMessage.Format, message: String, entityData: String): SymMessage
{
    this.format = format
    this.message = message
    this.entityData = entityData
    return this
}

fun SymMessage.build(format: SymMessage.Format, message: String): SymMessage
{
    this.format = format
    this.message = message
    return this
}
