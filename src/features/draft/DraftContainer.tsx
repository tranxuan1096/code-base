import { Route, Routes } from 'react-router-dom'
import DraftLayout from './components/DraftLayout'
import Draft from './containers/Draft'
import DraftButton from './containers/DraftButton'
import DraftFormControl from './containers/DraftForm'
import DraftTypography from './containers/DraftTypography'
import { DRAFT_ROUTES } from './routes'
import './style.scss'

const DraftContainer = () => {
  return (
    <Routes>
      <Route element={<DraftLayout />}>
        <Route index element={<Draft />} />
        <Route path={DRAFT_ROUTES.typo.path} element={<DraftTypography />} />
        <Route path={DRAFT_ROUTES.button.path} element={<DraftButton />} />
        <Route
          path={DRAFT_ROUTES.formControl.path}
          element={<DraftFormControl />}
        />
        <Route path="*" element={<>Not found</>} />
      </Route>
    </Routes>
  )
}

export default DraftContainer
