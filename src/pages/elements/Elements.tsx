//components
import Layout from '../../components/layout/Layout';
import Button from '../../components/butttons/Button';
import InputSearch from '../../components/inputTexts/InputSearch';

//icons 
import cross from "../../assets/icons/cross.svg";
import filter from "../../assets/icons/filter.svg";

//styles
import './index.scss';
import NoElements from '../../components/elements/NoElements';

const Elements = () => {
  return (
    <Layout>
      <div className="elements">
        <p className='elements-header'>Elements</p>

        <div className="elements-control flex items-center justify-between">
          <div className="elements-control__search flex items-center">
            <InputSearch placeholder="Search for element" style={{ padding: "8px" }} />
            <img src={filter} alt="filter" />
          </div>
          <Button title='Create Element' icon={cross} iconRight={true} style={{ padding: "12px" }} />
        </div>

        <div className="elements-content">
          <NoElements />
        </div>
      </div>
    </Layout>
  )
}

export default Elements