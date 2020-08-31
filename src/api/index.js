import axios from 'axios'; // used to make api requests


const url = "https://api.covidtracking.com/v1/states/ca/current.json"
const url3 = 'https://api.covidtracking.com/v1/states'
const bigUrl = 'https://api.covidtracking.com/v1/states/current.json'

function parse(str) {
    var y = (str).substr(0,4),
        m  = (str).substr(6,2),
        d = (str).substr(4,2);
        
    
    return y + '-' + d + '-' + m;
}
function parse2(str) {
    var y = (str).substr(0,4),
        m  = (str).substr(6,2),
        d = (str).substr(4,2);
        
    
    return d + '-' + m + '-' + y;
}
export const fetchData = async(state) => {
   
    let changeableUrl2 = url;
    if (state) {
        state = state.toLowerCase()
        
        changeableUrl2 = `${url3}/${state}/current.json`
        try {
       
            const data2 = await axios.get(changeableUrl2);
            let date = parse(data2.data.date.toString()) + 'T17:28:22.000Z';
            
            console.log(date)
            
            const modifiedData2 = {
                confirmed: data2.data.positive,
                hospitalized: data2.data.positiveIncrease,
                deaths: data2.data.death,
                lastUpdate: date,
            }
            
            return modifiedData2;
    
        } catch (error) { 

        }
    }
    else {
        try {
       
            const data9 = (await axios.get('https://api.covidtracking.com/v1/us/daily.json'))
            let date = parse(data9.data[0].date.toString()) + 'T17:28:22.000Z';
            const modifiedData2 = {
                confirmed: data9.data[0].positive,
                hospitalized: data9.data[0].positiveIncrease,
                deaths: data9.data[0].death,
                lastUpdate: date,
            }
            
            return modifiedData2;
    
        }
        catch (error) {

        }
    }
   
}
export const fetchDailyData = async () => {
    try {
        const data = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
       
        const modifiedData = data.data.map((dailyData) => ({
            confirmed: dailyData.positive,
            deaths: dailyData.death,
            date: parse2(dailyData.date.toString())
        }))
       
        return modifiedData;
    }
  
    catch (error) {

    }
}

export const fetchStates = async () => {
    try {
        const data2 = await axios.get(`${bigUrl}`);
        const finalData = data2.data;
        return finalData.map((state)=>state.state);
    }
    catch(error) {

    }
}