/**
 *@typedef {import('flatpickr/dist/types/options').Options} FlatpickrOptions
 */

/**
 * @typedef {import('./utils.js').SafeHtml} SafeHtml
 */

/**
 * @typedef {import('./view/view.js').default} View
 * @typedef {import('./view/brief-view.js').default} BriefView
 * @typedef {import('./view/add-view.js').default} AddView
 * @typedef {import('./view/filter-view.js').default} FilterView
 * @typedef {import('./view/sort-view.js').default} SortView
 * @typedef {import('./view/list-view.js').default} ListView
 * @typedef {import('./view/card-view.js').default} CardView
 * @typedef {import('./view/editor-view.js').default} EditorView
 * @typedef {import('./view/placeholder-view.js').default} PlaceholderView
 * @typedef {import('./view/overlay-view.js').default} OverlayView
 */

/**
 * @typedef {BriefViewState}
 * @prop {string} places
 * @prop {string} dates
 * @prop {string} cost
 */

/**
 * @typedef {AddViewState}
 * @prop {boolean} isDisabled
 */

/**
 * @typedef FilterViewState
 * @prop {Array<FilterItemViewState>} items
 */

/**
 * @typedef FilterItemViewState
 * @prop {FilterType} value
 * @prop {boolean} isDisabled
 * @prop {boolean} isSelected
 */

/**
 * @typedef {'everything' | 'future' | 'present' | 'past'} FilterType
 */

/**
 * @typedef SortItemViewState
 * @prop {SortType} value
 * @prop {boolean} isDisabled
 * @prop {boolean} isSelected
 */

/**
 * @typedef SortViewState
 * @prop {Array<SortItemViewState>} items
 */

/**
 *@typedef {'day' | 'event' | 'time' | 'price' | 'offers'} SortType
 */

/**
 * @typedef ListViewState
 * @prop {Array<PointViewState>} items
 * @prop {string} id
 */

/**
 * @typedef PointViewState
 * @prop {string} id
 * @prop {Array<{value: PointType, isSelected: boolean}>} types
 * @prop {Array<Destination & {isSelected: boolean}>} destinations
 * @prop {string} startDateTime
 * @prop {string} endDateTime
 * @prop {string} startDate
 * @prop {string} startTime
 * @prop {string} endTime
 * @prop {string} duration
 * @prop {number} basePrice
 * @prop {Array<Offer & {isSelected?: boolean}>} offers
 * @prop {boolean} isFavorite
 * @prop {boolean} isEditable
 * @prop {boolean} isDraft
 * @prop {boolean} [isSaving]
 * @prop {boolean} [isDeleting]
 */

/**
 * @typedef PlaceholderViewState
 * @prop {string} text
 * @prop {boolean} [isHidden]
 */

/**
 * @typedef OverlayViewState
 * @prop {boolean} isActive
 */

/**
 * @typedef UrlParams
 * @prop {string} [edit]
 * @prop {FilterType} [filter]
 * @prop {SortType} [sort]
 */

/**
 * @typedef {import('./models/model.js').default} Model
 * @typedef {import('./models/app-model.js').default} AppModel
 */

/**
 * @typedef {import('./services/service.js').default} Service
 * @typedef {import('./services/api-service.js').default} ApiService
 */

/**
 * @typedef ServiceOptions
 * @prop {string} baseUrl
 * @prop {number} minResponseTime
 * @prop {string} authorization
 */

/**
 * @typedef Point
 * @prop {string} id
 * @prop {PointType} type
 * @prop {string} destinationId
 * @prop {string} startDateTime
 * @prop {string} endDateTime
 * @prop {number} basePrice
 * @prop {Array<string>} offerIds
 * @prop {boolean} isFavorite
 */

/**
 * @typedef PointInSnakeCase
 * @prop {string} id
 * @prop {PointType} type
 * @prop {string} destination
 * @prop {string} date_from
 * @prop {string} date_to
 * @prop {number} base_price
 * @prop {Array<string>} offers
 * @prop {boolean} is_favorite
 */

/**
 * @typedef Destination
 * @prop {string} id
 * @prop {string} name
 * @prop {string} description
 * @prop {Array<Picture>} pictures
 */

/**
 * @typedef Picture
 * @prop {string} src
 * @prop {string} description
 */

/**
 * @typedef OfferGroup
 * @prop {PointType} type
 * @prop {Array<Offer>} offers
 */

/**
 * @typedef Offer
 * @prop {string} id
 * @prop {string} title
 * @prop {number} price
 */

/**
 * @typedef {'taxi' | 'bus' | 'train' | 'ship' | 'drive' | 'flight' | 'check-in' | 'sightseeing' | 'restaurant'} PointType
 */
