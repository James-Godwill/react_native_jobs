import { useState , useEffect } from "react";
import {RAPID_API_KEY} from "@env"

import axios from "axios";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint,query) => {
const [data,setData] = useState([]);
const [isLoading,setIsLoading] = useState(false);

const [error,setError] = useState(null);

const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };


}