import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCarList } from './actions/carActions';
//import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridBottomRowData: []
        }
    }

    componentDidMount() {
        this.props.getCarList();
    }

    componentDidUpdate(prevProps) {
        if (this.props.rowData !== prevProps.rowData && this.gridApi) {
            this.updateGridFooter();
        }
    }


    updateGridFooter = () => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        if (this.gridApi) {
            let rows = [];
            this.gridApi.forEachNodeAfterFilter(n => rows.push(n.data))

            const price = rows.reduce((a,b) => (a + (+b.price || 0)) || 0, 0)
            const footerPinnedRow = {
                price: formatter.format(price).replace('.00', '')
            }
            this.setState({ gridBottomRowData: [footerPinnedRow]})
        }
    }



    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let rows = [];

        this.gridApi.forEachNodeAfterFilter(n => rows.push(n.data));
        this.updateGridFooter(rows);
    }



    render() {

        const { rowData } = this.props;

        const columnDefs = [
            { headerName: "Make",   field: "make",  sortable: true, filter: true },
            { headerName: "Model",  field: "model", sortable: true, filter: true },
            { headerName: "Price",  field: "price", sortable: true, filter: true }
        ];

        const gridOptions = {
            rowSelection: 'single'
        }



        return (
            <div className="App">
                <div className="ag-theme-bootstrap" style={{ height: '500px', width: '620px' }}>
                    <AgGridReact    columnDefs={columnDefs}
                                    rowData={rowData}
                                    onFilterChanged={this.updateGridFooter}
                                    gridOptions={gridOptions}
                                    onGridReady={this.onGridReady}
                                    pinnedBottomRowData={this.state.gridBottomRowData}
                    />
                </div>
            </div>
        );        
    }   
}

const mapStateToProps = (state) => ({
    rowData: state.car
})

export default connect(mapStateToProps, { getCarList })(App);
