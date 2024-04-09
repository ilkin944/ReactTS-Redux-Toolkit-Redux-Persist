/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom"

export default function NewsDetails() {

  const navigate = useNavigate();
  // console.log();
  navigate('/')

  


  // const [xeberDetallari, setxeberDetallari] = useState({})
  // const { slug } = useParams();

  // const getDetils = async (text) => {
  //   try {
  //     const req = await axios.get(`/xeberler?slug=${text}`);
  //     const res = await req.data;
  //     setxeberDetallari(res);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getDetils(slug);
  // }, [slug]);
  return <div>NewsDetails</div>;
}
