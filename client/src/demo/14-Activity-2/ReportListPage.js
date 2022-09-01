import { useEffect, useState, createContext, useContext } from 'react';
import { List, ListItemButton, ListItemIcon, Card, CardContent, Typography, Button, CardActions } from '@mui/material';


function ReportItem({ report }) {
    if (!report) return;

    return <ListItemButton>
        <ListItemIcon>
            {`${report.name.first} ${report.name.last}`}
        </ListItemIcon>
    </ListItemButton>;
}

function ReportInfo({ report }) {

    // const ctx = useContext(SelectedReportContext);

    // if (!ctx.selectedReport) return;

    return <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {`${report.name.first} ${report.name.last}`}
            </Typography>
            <Typography variant="h5" component="div">
                {report.phone}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                by: {report.email}
            </Typography>
            <Typography variant="body2">
                {report.nat}
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>;
}


const SelectedReportContext = createContext({ selectedReport: null });

export default function ReportListPage() {

    const [reports, setReports] = useState(null);
    const [error, setError] = useState(null);
    // const [opacity, setOpacity] = useState(0);

    // const css = {
    //     reportList: {
    //         opacity: opacity,
    //         transition: 'opacity 2s ease-in;'
    //     }
    // };

    useEffect(() => {
        (async () => {

            try {
                const response = await fetch('https://randomuser.me/api/?results=10&nat=us');
                const json = await response.json();
                setError(null);
                setReports(json.results);
                // setOpacity(1);
            } catch (err) {
                setError(err);
            }

        })();

    }, []);

    if (error) return <h2>ERROR!</h2>;

    if (!reports) return <h1>LOADING...</h1>;
    console.log(reports)
    const value = '';
    return (
        <SelectedReportContext.Provider value={value}>
            <ReportInfo report={reports[0]} />
            <ReportList reports={reports} />
        </SelectedReportContext.Provider>
    );

}

function ReportList({ reports }) {
    // const ctx = useContext(SelectedReportContext);

    return <List aria-label="main mailbox folders">
        {reports.map(report =>
            <ReportItem report={report} key={report.login.uuid} />
        )}
    </List>;
}