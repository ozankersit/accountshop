import ProtectedRoute from '../../components/routes/ProtectedRoute'
import ProfileLeftMenu from './ProfileLeftMenu';

const Advert = () => {
  return (
    <ProtectedRoute>
    <ProfileLeftMenu>
      <div className='pl-[50px] max-w-xs rounded-md'>
        <div>
          <span>Advert</span>
        </div>
      </div>
    </ProfileLeftMenu>
    </ProtectedRoute>
    
  )
}

export default Advert