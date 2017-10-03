package info.savingmy.innovate.service.data.entities

import javax.persistence.Column
import javax.persistence.EmbeddedId
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(schema = "savingmyinfo", name = "bookmark_tags")
class Tag
{
    @EmbeddedId
    var tagId: TagPK? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bookmark_id", insertable = false, updatable = false)
    var bookmark: Bookmark? = null

    @Column(name = "bookmark_id", insertable = false, updatable = false)
    var bookmarkId: Int = 0

    @Column(insertable = false, updatable = false)
    var tag: String = ""
}
