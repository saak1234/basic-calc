import Button from 'react-bootstrap/Button';
import classes from './Btn.module.css';
function Btn(props) {
  return (
    <>
      <Button  className= {classes.size} variant="secondary" onClick={props.onClick}>{props.children}</Button>{' '}
      
    </>
  );
}

export default Btn;