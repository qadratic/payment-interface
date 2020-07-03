import React from 'react'
import { Typography, Divider, Button } from '@material-ui/core'
import portfolio from './images/portfolio.svg'
import transaction from './images/transaction.svg'
import tutorials from './images/tutorials.svg'
import settings from './images/setting.svg'
import btc from './images/btc.svg'
import eth from './images/eth.svg'
import impexp from './images/impexp.svg'
import search from './images/search.svg'
import adddelete from './images/adddelete.svg'
import synchronized from './images/synchronized.svg'

export default function App() {
	return (
		<div style={{ height: '100vh', width: '100vw', }} >
			<div style={{ marginLeft: '10%', marginRight: '10%', paddingTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
				<img className='hand' src='https://cypherock.com/static/img/logo.png' alt='logo' />
				<div style={{ color: '#D3A630', display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
					<img src={synchronized} alt='' width='300' />
				</div>
			</div>
			<div style={{ marginLeft: '10%', marginRight: '10%', paddingTop: '30px', display: 'flex', flexDirection: 'row', }} >
				<div style={{ minWidth: '25%', backgroundColor: '#1E2328', paddingTop: '50px', borderRadius: 10, color: 'white' }} >
					<div className='hand' style={{ marginLeft: '20%', marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
						<img src={portfolio} alt='' width='40' />
						&nbsp;&nbsp;
						<Typography variant='h6' >Portfolio</Typography>
					</div>
					<Divider style={{ backgroundColor: 'gray' }} />
					<div className='hand' style={{ marginLeft: '20%', marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
						<img src={transaction} alt='' width='40' />
						&nbsp;&nbsp;
						<Typography variant='h6' >Last Transaction</Typography>
					</div>
					<Divider style={{ backgroundColor: 'gray' }} />
					<div className='hand' style={{ marginLeft: '20%', marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
						<img src={tutorials} alt='' width='40' />
						&nbsp;&nbsp;
						<Typography variant='h6' >Tutorials</Typography>
					</div>
					<Divider style={{ backgroundColor: 'gray' }} />
					<div className='hand' style={{ marginLeft: '20%', marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
						<img src={settings} alt='' width='40' />
						&nbsp;&nbsp;
						<Typography variant='h6' >Setting</Typography>
					</div>
					<div style={{ marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
						<Button variant='outlined' color='primary' size='large' >make benificiary</Button>
					</div>
					<div className='hand' style={{ marginTop: 50, }} >
						<div style={{ height: 100, width: '100%', backgroundColor: 'rgb(75, 60, 43)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
							<Typography variant='h6' style={{ color: 'white' }} >Support</Typography>
						</div>
					</div>
				</div>
				<div style={{ flex: 1, padding: 50 }} >
					<div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
						<Typography variant='h4' style={{ color: 'rgb(226, 193, 157)' }} >Wallet 1</Typography>
						<div>
							<img src={search} alt='' width='300' />
							&nbsp;&nbsp;
							&nbsp;&nbsp;
							<img className='hand' src={adddelete} alt='' width='220' />
						</div>
					</div>
					<Typography variant='h5' style={{ color: 'white', margin: 50 }} >Total Coins - 7</Typography>
					<table style={{ color: 'rgb(90, 90, 90)', flex: 1 }} >
						<tr>
							<th style={{ paddingRight: 150 }} ><Typography variant='h6' >Coin</Typography> </th>
							<th style={{ paddingRight: 150 }} ><Typography variant='h6' >Holding</Typography> </th>
							<th style={{ paddingRight: 150 }} ><Typography variant='h6' >Value</Typography> </th>
							<th style={{ paddingRight: 150 }} ><Typography variant='h6' >Price</Typography> </th>
							<th style={{ paddingRight: 150 }} ><Typography variant='h6' >Action</Typography> </th>
						</tr>
						<tr style={{ backgroundColor: 'rgb(22, 28, 35)', borderRadius: 10, color: 'white' }} >
							<td style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
								<img alt='' src={btc} />
								<Typography variant='body1' >  BITCOIN</Typography>
							</td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >BTC 0.00256</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.5268</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.12586</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >
								<img className='hand' src={impexp} alt='' width='200' />
							</Typography></td>
						</tr>
						<tr style={{ backgroundColor: 'rgb(22, 28, 35)', borderRadius: 10, color: 'white' }} >
							<td style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
								<img alt='' src={eth} />
								&nbsp;&nbsp;
								<Typography variant='body1' >  ETHERIUM</Typography>
							</td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >ETH 0.00256</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.5268</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.12586</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >
								<img className='hand' src={impexp} alt='' width='200' />
							</Typography></td>
						</tr>
						<tr style={{ backgroundColor: 'rgb(22, 28, 35)', borderRadius: 10, color: 'white' }} >
							<td style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
								<img alt='' src={btc} />
								&nbsp;&nbsp;
								<Typography variant='body1' >  BITCOIN</Typography>
							</td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >BTC 0.00256</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.5268</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.12586</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >
								<img className='hand' src={impexp} alt='' width='200' />
							</Typography></td>
						</tr>
						<tr style={{ backgroundColor: 'rgb(22, 28, 35)', borderRadius: 10, color: 'white' }} >
							<td style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
								<img alt='' src={eth} />
								&nbsp;&nbsp;
								<Typography variant='body1' >  ETHERIUM</Typography>
							</td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >ETH 0.00256</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.5268</Typography></td>
							<td style={{ padding: 20 }} ><Typography variant='body1' >$ 0.12586</Typography></td>
							<td style={{ padding: 20 }} >
								<img className='hand' src={impexp} alt='' width='200' />
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	)
}
