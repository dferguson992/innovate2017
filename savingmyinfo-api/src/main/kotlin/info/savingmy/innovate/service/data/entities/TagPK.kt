package info.savingmy.innovate.service.data.entities

import javax.persistence.Column
import javax.persistence.Embeddable
import java.io.Serializable

@Embeddable
class TagPK : Serializable
{
    @Column(name = "bookmark_id")
    var bookmarkId: Int = 0

    @Column
    var tag: String = ""
}
