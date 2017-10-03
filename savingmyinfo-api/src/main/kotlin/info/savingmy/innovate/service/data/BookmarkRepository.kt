package info.savingmy.innovate.service.data

import info.savingmy.innovate.service.data.entities.Bookmark
import org.springframework.data.repository.CrudRepository

interface BookmarkRepository : CrudRepository<Bookmark, Int>
