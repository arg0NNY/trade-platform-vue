import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import RelativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('ru')
dayjs.extend(RelativeTime)
