import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import React, {useEffect, useState} from 'react'

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';
import axios from 'axios';
import { CLIENT_RENEG_LIMIT } from 'tls';

// ----------------------------------------------------------------------

// test()

export function OverviewAnalyticsView() {
  // const [ema]

  const map = {
//     0     احتياج منخفض جداً
// 1     احتياج منخفض جداً
// 2     احتياج منخفض جداً
// 3    احتياج متوسط مرتفع
// 4             غير محتاج
// 5          احتياج مرتفع
// 6          احتياج متوسط
// 7             غير محتاج
// 8          احتياج متوسط
// 9     احتياج منخفض جداً
  }

const [a, setA] = useState('')
const [b, setB] = useState('')
const [c, setC] = useState('')
const [d, setD] = useState('')
const [e, setE] = useState('')
const [f, setF] = useState('')
const [g, setG] = useState('')
const [h, setH] = useState('')
const [i, setI] = useState('')
const [j, setJ] = useState('')
const [k, setK] = useState('')
const [l, setL] = useState('')

const handleA = (e: any) => setA(e.target.value)
const handleB = (e: any) => setB(e.target.value)
const handleC = (e: any) => setC(e.target.value)
const handleD = (e: any) => setD(e.target.value)
const handleE = (e: any) => setE(e.target.value)
const handleF = (e: any) => setF(e.target.value)
const handleG = (e: any) => setG(e.target.value)
const handleH = (e: any) => setH(e.target.value)
const handleI = (e: any) => setI(e.target.value)
const handleJ = (e: any) => setJ(e.target.value)
const handleK = (e: any) => setK(e.target.value)
const handleL = (e: any) => setL(e.target.value)

useEffect(() => {
  console.log({a, b,c,d,e,f,g,h,i,j,k,l})
}, [a, b,c,d,e,f,g,h,i,j,k,l])

const [state,setState] = useState('')
const [house,setHouse] = useState('')

async function test  () {
  // return async () => {
    try {
      const response = await axios.post('http://localhost:5000/test',{
        a, b,c,d,e,f,g,h,i,j,k,l
      });
      console.log('response data', response.data)
      const resp = response.data
      setState(resp.data)
      console.log(
        {resp}
      )
      housing()
      return resp
    } catch (error) {
      console.error(error);
      const resp = error
      return resp
    }
  // };
}

async function housing  () {
  // return async () => {
    try {
      const response = await axios.post('http://localhost:5000/housing',{
        e, h, c
      });
      console.log('response data', response.data)
      const resp = response.data
      setHouse(resp.data)
      console.log(
        {resp}
      )
      return resp
    } catch (error) {
      console.error(error);
      const resp = error
      return resp
    }
  // };
}
// Very High', 4:'Low', 5: 'Very Low', 6: 'N/A', 2: 'High', 1: 'Medium High', 0: 'Medium'
const color = {
  'Very High': 'red',
  'Low': 'green',
  'Very Low':'green',
  'N/A': 'black',
  'High':'red',
  'Medium High': 'blue', 
  'Medium': 'blue'
}
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Datathon (Development Housing)
      </Typography>
       
      {state &&  <div key={1} style={{padding: 20}}>
        <div style={{
          width: '50px', color: 'red' // color[{state}]
          }}>
          {state}
        </div>
      </div>}
     
      {house &&  <div key={1} style={{padding: 20}}>
        <div style={{
          width: '50px', color: 'red' // color[{house}]
          }}>
          { house === '[{"a":44,"b":1,"c":2},{"a":44,"b":1,"c":2},{"a":44,"b":1,"c":2}]' ? 'سكن لشخص واحد من ذوي الههم في الرياض ': ''}
          { house === '[{"a":109,"b":12,"c":1},{"a":109,"b":12,"c":1},{"a":109,"b":12,"c":1}]' ? 'سكن لشخص واحد من ذوي الههم في الرياض ': ''}
        </div>
      </div>}
      
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
    {/* <Box display="flex" flexDirection="column" alignItems="flex-end"> */}
    <Grid container spacing={3}>
    <Grid xs={12} md={6} lg={4}>
        
      <TextField
                    sx={{ width: '100%' }}
                    label="الحالة الاجتماعية"
                    select
                    value={a}
                    onChange={handleA}
                    name="warehouse"
                  >
                    <MenuItem value={0} key={1}>
                    أرمل/أرملة
                    </MenuItem>
                    <MenuItem value={1} key={2}>
                    أعزب/عزباء
                    </MenuItem>
                    <MenuItem value={2} key={3}>
                    متزوج/متزوجة
                    </MenuItem>
                    <MenuItem value={3} key={4}>
                    مطلق/مطلقة
                    </MenuItem>
                    <MenuItem value={4} key={5}>
                    منفصل/منفصلة
                    </MenuItem>
                  </TextField>
      </Grid>

      <Grid xs={12} md={6} lg={4}>
      <TextField
                    sx={{ width: '100%' }}
                    label="الحالة الصحية"
                    select
                    // value={''}
                    value={c}
                    onChange={handleC}
                    // onChange={(e) => setWarehouseSelected(e.target.value)}
                    name="warehouse"
                  >
                    <MenuItem value={0} key={1}>
                    سليم
                    </MenuItem>
                    <MenuItem value={1} key={2}>
                    مريض
                    </MenuItem>
                    <MenuItem value={2} key={3}>
                    معاق
                    </MenuItem>
                    <MenuItem value={3} key={4}>
                    معاق ومريض
                    </MenuItem>
                  </TextField>
      </Grid>

      <Grid xs={12} md={6} lg={4}>
      <TextField
                    sx={{ width: '100%' }}
                    label="مسار الدعم السكني"
                    select
                    // value={''}
                    value={l}
                    onChange={handleL}
                    // onChange={(e) => setWarehouseSelected(e.target.value)}
                    name="warehouse"
                  >
                    <MenuItem value={0} key={1}>
                    انتفاع
                    </MenuItem>
                    <MenuItem value={1} key={2}>
                    انتفاع مع الوعد بالتمليك
                    </MenuItem>
                    <MenuItem value={2} key={3}>
                    غير مشمول
                    </MenuItem>
                    <MenuItem value={3} key={4}>
                    هبة
                    </MenuItem>
                  </TextField>
      </Grid>

      <Grid xs={12} md={6} lg={4}>
      <TextField
                    sx={{ width: '100%' }}
                    label="ملكية المسكن"
                    select
                    // value={''}
                    value={j}
                    onChange={handleJ}
                    // onChange={(e) => setWarehouseSelected(e.target.value)}
                    name="warehouse"
                  >
                    <MenuItem value={0} key={1}>
                    إيجار
                    </MenuItem>
                    <MenuItem value={1} key={2}>
                    ايجار منتهي بالتمليك
                    </MenuItem>
                    <MenuItem value={2} key={3}>
                    مقدم بلا أجر
                    </MenuItem>
                    <MenuItem value={3} key={4}>
                    مقدم بلا أجر من فر
                    </MenuItem>
                    <MenuItem value={4} key={5}>
                    مقدم بلا أجر من مؤسسة
                    </MenuItem>
                    <MenuItem value={5} key={6}>
                    مقدم من مؤسسة بإيجار رمزي
                    </MenuItem>
                    <MenuItem value={6} key={7}>
                    ملك
                    </MenuItem>
                    <MenuItem value={7} key={8}>
                    يدفع عن طريق متبرع (فرد)
                    </MenuItem>
                    <MenuItem value={8} key={9}>
                    يدفع عن طريق متبرع مؤسسة
                    </MenuItem>
                  </TextField>
      </Grid>


<Grid xs={12} md={6} lg={4}>
      <TextField
                    sx={{ width: '100%' }}
                    label="المسكن"
                    select
                    // value={''}
                    value={i}
                    onChange={handleI}
                    // onChange={(e) => setWarehouseSelected(e.target.value)}
                    name="warehouse"
                  >
                    <MenuItem value={0} key={1}>
                    خيمة
                    </MenuItem>
                    <MenuItem value={1} key={2}>
                    دوبلكس
                    </MenuItem>
                    <MenuItem value={2} key={3}>
                    دور
                    </MenuItem>
                    <MenuItem value={3} key={4}>
                    شعبي
                    </MenuItem>
                    <MenuItem value={4} key={5}>
                    شقة
                    </MenuItem>
                    <MenuItem value={5} key={6}>
                    صفيح
                    </MenuItem>
                    <MenuItem value={6} key={7}>
                    طين
                    </MenuItem>
                    <MenuItem value={7} key={8}>
                    فيلا
                    </MenuItem>
                  </TextField>
      </Grid>
      
      
      <Grid xs={12} md={6} lg={4}>
      <TextField
                    sx={{ width: '100%' }}
                    label="المنطقة"
                    select
                    // value={''}
                    value={d}
                    onChange={handleD}
                    // onChange={(e) => setWarehouseSelected(e.target.value)}
                    name="warehouse"
                  >
                    <MenuItem value={10} key={1}>
                    منطقة الرياض
                    </MenuItem>
                    <MenuItem value={11} key={2}>
                    منطقة مكة المكرمة
                    </MenuItem>
                    <MenuItem value={5} key={3}>
                    المنطقة الشرقية
                    </MenuItem>
                    <MenuItem value={4} key={4}>
                    المدينة المنورة
                    </MenuItem>
                    <MenuItem value={2} key={5}>
                    الحدود الشمالية
                    </MenuItem>
                    </TextField>
      </Grid>
      
      <Grid xs={12} md={6} lg={4}>
      <TextField
                    sx={{ width: '100%' }}
                    label="المدينة"
                    select
                    // value={''}
                    value={e}
                    onChange={handleE}
                    // onChange={(e) => setWarehouseSelected(e.target.value)}
                    name="warehouse"
                  >
                    <MenuItem value={44} key={1}>
                    --
                    </MenuItem>
                    <MenuItem value={122} key={2}>
                    جدة
                    </MenuItem>
                    <MenuItem value={83} key={3}>
                    المدينة المنورة
                    </MenuItem>
                    <MenuItem value={109} key={4}>
                    تبوك
                    </MenuItem>
                    <MenuItem value={40} key={5}>
                    الدمام
                    </MenuItem>
                    </TextField>
      </Grid>
      
      <Grid xs={12} md={6} lg={4}>
      <TextField
        fullWidth
        name="email"
        label="العمر"
        // defaultValue=""
        value={b}
        onChange={handleB}
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      </Grid>
      
      <Grid xs={12} md={6} lg={4}>
      <TextField
        fullWidth
        name="email"
        label="دخل رب الأسرة"
        value={f}
        onChange={handleF}
        defaultValue=""
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      </Grid>
      
      <Grid xs={12} md={6} lg={4}>
      <TextField
        fullWidth
        name="email"
        label="مجموع الدخل"
        value={g}
        onChange={handleG}
        defaultValue=""
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      </Grid>
      
      <Grid xs={12} md={6} lg={4}>
      <TextField
        fullWidth
        name="email"
        label="عدد الافراد"
                    value={h}
                    onChange={handleH}
        defaultValue=""
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      </Grid>
      
      <Grid xs={12} md={6} lg={4}>
      <TextField
        fullWidth
        name="email"
        label="قيمة الايجار"
                    value={k}
                    onChange={handleK}
        defaultValue=""
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      </Grid>


      
      {/* <TextField
                    sx={{ width: '100%' }}
                    label="Select a Warehouse"
                    select
                    value={''}
                    // onChange={(e) => setWarehouseSelected(e.target.value)}
                    name="warehouse"
                  >
                    <MenuItem value={'a'} key={1}>
                      data
                    </MenuItem>
                    <MenuItem value={'a'} key={2}>
                      data
                    </MenuItem>
                  </TextField> */}

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={() => {test()}}
      >
        ارسل البيانات
      </LoadingButton>
      
      </Grid>
    </Box>
    {/* </Box> */}
{/* 
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="New users"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Purchase orders"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Current visits"
            chart={{
              series: [
                { label: 'America', value: 3500 },
                { label: 'Asia', value: 2500 },
                { label: 'Europe', value: 1500 },
                { label: 'Africa', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsTrafficBySite
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 323234 },
              { value: 'google', label: 'Google', total: 341212 },
              { value: 'linkedin', label: 'Linkedin', total: 411213 },
              { value: 'twitter', label: 'Twitter', total: 443232 },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid> 
      </Grid> */}
    </DashboardContent>
  );
}
