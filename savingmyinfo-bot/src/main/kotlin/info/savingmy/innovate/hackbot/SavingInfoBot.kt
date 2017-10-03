package info.savingmy.innovate.hackbot

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
    private val client : SymphonyClient = SymphonyClientFactory.getClient(SymphonyClientFactory.TYPE.V4, SymphonyClientConfig())

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
        client.messagesClient.sendMessage(message.stream, SymMessage().build(SymMessage.Format.MESSAGEML, message.message, message.entityData))
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
