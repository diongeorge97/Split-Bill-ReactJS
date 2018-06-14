import React from 'react';
import {Container, Row, Col} from 'react-amazing-grid';

export default class Comment extends React.Component {

   constructor(props) {
    super(props);
    this.state = { temp: true,
       isChecked1: true,
       isChecked2: true,
       isChecked3: true,
       isChecked4: true,
     };
     }



 toggleChange1 = () => {
    this.setState({
      isChecked1: !this.state.isChecked1,
    });
  }

 toggleChange2 = () => {
    this.setState({
      isChecked2: !this.state.isChecked2,
    });
  }

  toggleChange3 = () => {
    this.setState({
      isChecked3: !this.state.isChecked3,
    });
  }

  toggleChange4 = () => {
    this.setState({
      isChecked4: !this.state.isChecked4,
    });
  } 




remove = () => {
  console.log('Hello Remove');
  this.props.deleteFromBoard(this.props.index);
 }

 save = () => {
    var splitMoney = 0;
  var splitPerson = 0;
  if(this.state.isChecked1){
  var stateCheck = "true"; 
  splitPerson++;
  }else{
    var stateCheck1 = "false";
  }

  if(this.state.isChecked2){
  var stateCheck2 = "true"; 
  splitPerson++;
  }else{
    var stateCheck2 = "false";
  }

  if(this.state.isChecked3){
  var stateCheck3 = "true"; 
  splitPerson++;
  }else{
    var stateCheck3 = "false";
  }

  if(this.state.isChecked4){
  var stateCheck4 = "true"; 
  splitPerson++;
  }else{
    var stateCheck4 = "false";
  }
  splitMoney = this.refs.newText2.value / splitPerson;

  this.props.updateCommentText(this.refs.newText.value,
    this.refs.newText2.value,
    this.refs.newText3.value,
    stateCheck1, 
    stateCheck2,
    stateCheck3,
    stateCheck4,
    splitPerson,
    splitMoney,
    this.props.index);
  console.log(splitMoney); 
    console.log(this.refs.newText2.value); 
    this.setState({temp:false});
 
 }



  renderNormal(){
    return(
      <div>
        <div>
        <h2> {this.props.dd.name} </h2>
        </div>
        <div className="horizontalLine">
      </div>

      <div>
        <table className="mainTable">
        <tr>
        <th>Amount: </th>
        <th>Paid by:</th>
    
        </tr>
        </table>
        </div>
      <div>
        <table className="memberTable">
  <tr>
    <th>Member</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>You</td>
    <td>Rs </td>
  </tr>
  <tr>
    <td>Welisa</td>
    <td>Rs</td>
  </tr>
    <tr>
    <td>Rohan</td>
    <td>Rs</td>
  </tr>
    <tr>
    <td>Varun</td>
    <td>Rs</td>
  </tr>
</table>
      </div>


        <div className="horizontalLine">
      </div>

        <div>
        <button onClick={this.remove}> Remove </button>
        </div>
      </div>  
       );
  }

  renderForm(){
    return(
        <div>
        

        <Container>
        <Row>
        <Col xs={3} xsoffset={1}>
        </Col>
        <Col>
        <span>Bill Name: </span>
          <input ref="newText" placeholder={'Enter Bill Name'} className="billStyle"></input>
        </Col>
        </Row>
        <Row>
         <Col xs={2} xsoffset={1}>
        </Col>
         <Col>
         <span>Paid by: </span>
          <input ref="newText2" placeholder={'Person paid'} className="paidStyle"></input>
        </Col>
         
        <Col>
          <span>Amount:</span>
          <input ref="newText3" placeholder={'In Rs.'} className="amtStyle"></input>
          </Col>
          </Row>
          <Row>
        <span>Split the bill with: </span>
        <label>
        
        <input type="checkbox"
          checked={this.state.isChecked1}
          onChange={this.toggleChange1}
        />
        Me
       </label>

      <label>
        
        <input type="checkbox"
          checked={this.state.isChecked2}
          onChange={this.toggleChange2}
        />
        Welisa
       </label>

        <label>
        
        <input type="checkbox"
          checked={this.state.isChecked3}
          onChange={this.toggleChange3}
        />
        Rohan
       </label>

       <label>
        
        <input type="checkbox"
          checked={this.state.isChecked4}
          onChange={this.toggleChange4}
        />
        Varun
       </label>
        </Row>
          </Container>

    <button onClick={this.save}> Save </button>
        </div>
      );
  }


 render (){
    if (this.state.temp) {
      return this.renderForm();
    }else{
      return this.renderNormal();
    }   
 }


}
