package info.savingmy.innovate.service.data.entities

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(schema = "savingmyinfo", name = "bookmarks")
class Bookmark
{
    @Column(name = "bookmark_id")
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    var bookmarkId: Int = 0

    @Column(name = "user_id")
    var userId: String = ""

    @Column(name = "author_id")
    var authorId: String = ""

    @Column(name = "stream_id")
    var streamId: String = ""

    @Column(name = "message_id")
    var messageId: String = ""

    @OneToMany(mappedBy="bookmark")
    var tags: MutableList<Tag> = mutableListOf()
}
