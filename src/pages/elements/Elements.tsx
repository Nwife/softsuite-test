import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, setElements, setError } from "../../redux/reducers/elementReducer";

//components
import Layout from '../../components/layout/Layout';
import Button from '../../components/butttons/Button';
import InputSearch from '../../components/inputTexts/InputSearch';

import { selectContent, selectError, selectIsLoading, selectTotal } from '../../redux/reducers/elementReducer';

import { GetElements } from '../../redux/reducers/elementReducer';

//icons 
import cross from "../../assets/icons/cross.svg";
import filter from "../../assets/icons/filter.svg";

//styles
import './index.scss';

//components
import CreateElementModal from '../../components/elements/CreateElementModal';
import NoElements from '../../components/elements/NoElements';
import ElementsTable from '../../components/elements/ElementsTable';


const Elements = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const dispatch = useDispatch();

  const loading = useSelector(selectIsLoading);
  const total = useSelector(selectTotal);
  const content = useSelector(selectContent);
  // const error = useSelector(selectError);

  useEffect(() => {
    //@ts-expect-error undefined
    dispatch(GetElements())
  }, [])

  console.log('total>>>', total);
  console.log('content>>>', content)

  const closeCreateModal = () => {
    setShowCreateModal(false);
  }

  return (
    <Layout>
      {loading ? <p>Loading...</p> :
      <div className="elements">
        <p className='elements-header'>Elements</p>

        <div className="elements-control flex items-center justify-between">
          <div className="elements-control__search flex items-center">
            <InputSearch placeholder="Search for element" style={{ padding: "8px" }} inputStyle={{ background: "#FFF" }} />
            <img src={filter} alt="filter" />
          </div>
          <Button title='Create Element' icon={cross} iconRight={true} style={{ padding: "12px" }} onClick={() => setShowCreateModal(true)} />
        </div>
{/* 
        <div className="elements-content">
          <NoElements />
        </div> */}
        { content?.length > 0 ?
          <div className='elements-table'>
            <ElementsTable
              data={content} 
              total={total}
            />
          </div> :
          <div className="elements-content">
            <NoElements />
          </div> 
        }
      </div>}
      {showCreateModal && <CreateElementModal closeCreateModal={closeCreateModal} />}
    </Layout>
  )
}

export default Elements;