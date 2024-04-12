import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setFilteredData } from "../state/slices/userSlice";
import Loading from "./Loading";
import { Container } from "react-bootstrap";
import Users from "../pages/Users";
import UserInput from "../pages/UserInput";
const apiurl=process.env.REACT_APP_API_URL;
const UserDetRedux = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const filteredData = useSelector((state) => state.user.filteredData);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiurl}/api/customuser`);

        setTimeout(() => {
          dispatch(setData(response.data));
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const searchFunction = () => {
    dispatch(setFilteredData(data.filter(item =>
      item.userName.toLowerCase().includes(searchQuery.toLowerCase())
    )));
    if (filteredData.length > 0) {
      setShow('true');
    } else {
      setShow('false');
    }
    if(searchQuery === ''){
      setShow('');
    }
  };


  return (
    <Container>
      <div display="flex justify-content">
        {/* <div className="fs-2 text-center">Users Records</div> */}
        <UserInput searchQuery={searchQuery} searchFunction={searchFunction} handleInputChange={handleInputChange} />
        {show === 'true' ? <div><div>Yes, {searchQuery} found</div><div className='p-3'><Users data={filteredData} /></div></div> : show === 'false' ? <div><div className="ms-3 w-50 fs-5 bg-danger bg-gradient rounded p-2 text-white">No, {searchQuery} not found</div><div className='p-3'>
          {isLoading ? <Loading /> : <Users data={filteredData} />}
        </div></div> : <div className='p-3'>
          {isLoading ? <Loading /> : <Users data={data} />}
        </div>}

      </div>
    </Container>


  );
};

export default UserDetRedux;