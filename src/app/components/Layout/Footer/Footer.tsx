import { Facebook } from "../../../shared/ui/Facebook";
import { Git } from "../../../shared/ui/Git";
import { Google } from "../../../shared/ui/Google";
import { Instagram } from "../../../shared/ui/Instagram";
import { Master } from "../../../shared/ui/Master";
import { Pay } from "../../../shared/ui/Pay";
import { PayPal } from "../../../shared/ui/PayPal";
import { Visa } from "../../../shared/ui/Visa";
import { Web } from "../../../shared/ui/Web";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
      <div className={styles.content}>
        <div className={styles.brand}>
          <h2>SHOP.CO</h2>
          <p>We have clothes that suit your style and which you're proud to wear. From women to men.</p>
          <div className={styles.socials}>
          <Web className="content"/>
          <Facebook className="content" />
          <Instagram className="content" />
          <Git className="content"/>
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4>HELP</h4>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>FAQ</h4>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>
      <div className={styles.copyright}>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
      </div>
      <div className={styles.payments}>
         <Visa />
         <Master/>
         <PayPal/>
         <Pay/>
         <Google/>
      </div>

  
      </div>
      </div>
    </footer>
  );
}
