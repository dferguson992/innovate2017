package info.savingmy.innovate.service.data

import info.savingmy.innovate.service.data.entities.Tag
import info.savingmy.innovate.service.data.entities.TagPK
import org.springframework.data.repository.CrudRepository

interface TagRepository : CrudRepository<Tag, TagPK>
{
    fun findByBookmarkId(bookmarkId: Int): List<Tag>
}
