import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        });
    }

    viewEmployee(id){
        this.props.history.push(`/employees/${id}`);
    }

    addEmployee(){
        this.props.history.push('/add-employee/-1');
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    deleteEmployee(id){//làm thế này chưa ổn vì chỉ lọc trên data đã gửi về, mặc dù nhanh, nhưng nếu nhiều request xóa cùng lúc thì sẽ ko đồng bộ
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id != id)});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striper table-bordered">
                        <thead>
                            <tr>
                                <th>Employee  First Name</th>
                                <th>Employee  Last Name</th>
                                <th>Employee  Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick={()=> this.viewEmployee(employee.id)} className="btn btn-success">View</button>
                                                <button onClick={()=> this.editEmployee(employee.id)} className="btn btn-info" style={{marginLeft: "10px"}}>Update</button>
                                                <button onClick={()=> this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;