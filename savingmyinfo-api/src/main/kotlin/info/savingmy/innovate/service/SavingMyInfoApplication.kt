package info.savingmy.innovate.service

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class SavingMyInfoApplication

fun main(vararg args: String)
{
    SpringApplication.run(SavingMyInfoApplication::class.java, *args)
}
