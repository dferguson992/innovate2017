package info.savingmy.innovate.hackbot.models

data class Bookmark(
        var bookmarkId: Int? = null,
        var userId: String = "",
        var authorId: String = "",
        var streamId: String = "",
        var messageId: String = "",
        var messageContents: String = "",
        var tags: MutableList<Tag> = mutableListOf())
