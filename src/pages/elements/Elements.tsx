//components
import Layout from '../../components/layout/Layout';
import Button from '../../components/butttons/Button';
import InputSearch from '../../components/inputTexts/InputSearch';

import { useState } from 'react';

//icons 
import cross from "../../assets/icons/cross.svg";
import filter from "../../assets/icons/filter.svg";

//styles
import './index.scss';

//components
import CreateElementModal from '../../components/elements/CreateElementModal';
import NoElements from '../../components/elements/NoElements';

const Elements = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <Layout>
      <div className="elements">
        <p className='elements-header'>Elements</p>

        <div className="elements-control flex items-center justify-between">
          <div className="elements-control__search flex items-center">
            <InputSearch placeholder="Search for element" style={{ padding: "8px" }} inputStyle={{ background: "#FFF" }} />
            <img src={filter} alt="filter" />
          </div>
          <Button title='Create Element' icon={cross} iconRight={true} style={{ padding: "12px" }} onClick={() => setShowCreateModal(true)} />
        </div>

        <div className="elements-content">
          <NoElements />
        </div>
      </div>
      {showCreateModal && <CreateElementModal />}
    </Layout>
  )
}

export default Elements;