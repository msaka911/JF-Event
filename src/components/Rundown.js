import Card from "./Card";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Rundown.module.css"
import logo from  "../assets/logo.png"


import { isMobile } from 'react-device-detect';

const Rundown = () => {
  return (
    <Card>
      <form className={classes.form}>
      <div className={isMobile?classes.media:classes.title}>
        <img src={logo} ></img>
        <h1>JF Insurance Annual Party Rundown</h1>
      </div>
        <Table striped bordered hover variant="dark" >
            <thead>
              <tr>
                <th>Estimated Time</th>
                <th>Description</th>
                <th>Helper/Performers</th>
                <th>Music</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00pm - 6:30pm</td>
                <td>Registration</td>
                <td>Reception Team</td>
                <td> </td>
              </tr>
              <tr>
                <td>6:30pm - 7:00pm</td>
                <td>Social gathering </td>
                <td></td>
                <td>New year songs</td>
              </tr>
              <tr>
                <td>7:00pm - 7:25pm</td>
                <td>Opening, Johnson and Renee speech, lion dance, Red Pocket</td>
                <td>Michael,Jackie</td>
                <td>PPT for presentation / music for Red pocket </td>
              </tr>
              <tr>
                <td>7:25pm - 7:30pm</td>
                <td>Dinner start/Johnson greeting</td>
                <td>Johnson</td>
                <td></td>
              </tr>
              <tr>
                <td>7:30pm - 7:45pm</td>
                <td>Charity promotion/presentation: Sickkids & Carefirst & Markham Food Bank</td>
                <td>Guests</td>
                <td>Mayor singing USB/ presentation PPT</td>
              </tr>
              <tr>
                <td>7:45pm - 8:00pm</td>
                <td>Lucky draw-1st run</td>
                <td>Luck draw team</td>
                <td>New year songs</td>
              </tr>
              <tr>
                <td>8:00pm - 8:10pm</td>
                <td>singing performance  2 songs</td>
                <td>Hugh Wang 1.朋友 2. You raise me up</td>
                <td>music-USB</td>
              </tr>
              <tr>
                <td>8:10pm - 8:20pm</td>
                <td>Lucky draw-2nd run </td>
                <td>Lucky draw team- Kristine, Shirley, Jenny, Lucy</td>
                <td>New year songs</td>
              </tr>
              <tr>
                <td>8:20pm - 8:30pm</td>
                <td>singing performance  2 songs</td>
                <td>爱乐乐团 1. 举杯吧朋友 2.好运来</td>
                <td>music-USB</td>
              </tr>
              <tr>
                <td>8:30pm - 8:45pm</td>
                <td>Markham Mayor Greeting/Singing/photos</td>
                <td>Mayor and guests</td>
                <td></td>
              </tr>
              <tr>
                <td>8:45pm - 9:00pm</td>
                <td>Dance performance</td>
                <td>3 professionsal dancers 1. Angels 2. bellydance 3. Samba</td>
                <td></td>
              </tr>
              <tr>
                <td>9:00pm - 9:15pm</td>
                <td>Lucky draw- 3rd run</td>
                <td>Lucky draw team- Yuki, Vanessa, Simran, Helen Li</td>
                <td>New year songs</td>
              </tr>
              <tr>
                <td>9:15pm - 9:20pm</td>
                <td>JF Staff singing (1 song)</td>
                <td>All staff</td>
                <td></td>
              </tr>
              <tr>
                <td>9:20pm- 9:30pm</td>
                <td>Final Lucky draw 2 big prizes for all agents </td>
                <td>Lucky draw team-Kristine, Shirley</td>
                <td>New year songs </td>
              </tr>
              <tr>
                <td>9:30pm </td>
                <td colSpan={3}>End of Party</td>
              </tr>
            </tbody>
          </Table>
        </form>
        </Card>
  );
};

export default Rundown;