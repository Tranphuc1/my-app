import React, { Component } from 'react';
class Home extends Component {

    render() {
        return (
            <div>
                <div className="container">
                        <div className="form-group">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-secondary active">
                                    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Active
                                </label>
                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="option2" autoComplete="off" /> Radio
                                </label>
                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="option3" autoComplete="off" /> Radio
                                </label>
                            </div>
                            <div className="btn-group" style={{display:'flex',width: 200 }} >
                                <label htmlFor />
                                <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                <button type="button" class="btn btn-info">Tìm</button>
                            </div>  
                        </div>  
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <hr/>
                    
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <table className="table table-striped table-{1:striped|sm|bordered|hover|inverse} table-inverse table-responsive">
                        <thead className="thead-inverse|thead-default">
                            <tr>
                                <th>STT</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td scope="row" >1</td>
                            <td>Admin@gmail.com</td>
                            <td>123456</td>
                            <td>
                                <div className="btn-btn-warning thaotao">
                                    
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td scope="row" />
                            <td />
                            <td />
                            </tr>
                        </tbody>
                    </table>

                    </div>
                    
                    
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        asdasd
                    </div>
                    
                </div>
            </div>    
                    
                
            </div>
        );

    }

}

export default Home;