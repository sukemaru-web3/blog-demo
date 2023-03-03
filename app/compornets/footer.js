import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer p-2" id="footer">
        <div className="container contact text-end">
          <div className="line m-3">
            <h4>LINEはこちら</h4>
            <a href="https://lin.ee/i2fyFGS">
              <img
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                alt="友だち追加"
                border="0"
              />
            </a>
          </div>
          <div className="title ">
            <h2 className="m-3">お問い合わせ</h2>
          </div>
          <div className="d-flex justify-content-end">
            <p>072-947-8077</p>
            <a href="tel:072-947-8077">
              <i class="bi bi-telephone-outbound "></i>
            </a>
          </div>
          <div className="d-flex justify-content-end">
            <p>info@nookin.net</p>
            <a href="mailto:info@nookin.net">
              <i class="bi bi-envelope-at"></i>{" "}
            </a>
          </div>
          <div className="d-flex justify-content-end">
            <p>大阪府藤井寺市野中2-5-16</p>
            <a href="https://www.google.co.jp/maps/place/nook+in/@34.5610019,135.6035229,18z/data=!4m5!3m4!1s0x600127a93d098db7:0x4e14e0544f95073a!8m2!3d34.5608252!4d135.6032386?hl=ja">
              <i class="bi bi-geo-alt"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
