import React, { useEffect } from 'react';
import { Row, Col} from 'react-bootstrap';
import Spinner from '../../components/spinner/Spinner';
import BankCard from '../../components/bankCard/BankCard';
import { useDispatch, useSelector } from 'react-redux';
import { getBanks } from '../../store/thunks/banksThunks';

const BankList = () => {
  const dispacth = useDispatch();
  
  const bankList = useSelector(state=>state.banks.bankList);

  useEffect(()=>{
    if(!bankList){
      dispacth(getBanks());
    }
  },[])

  if (!bankList) {
    return <Spinner />;
  }

  return (
    <Row>
      {bankList && bankList.map(({bankName,description,age,url}) => (
        <Col key={bankName} xs={12} md={6} lg={4} className='mt-4'>
          <BankCard
            bankName={bankName}
            description={description}
            age={age}
            url={url}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BankList;