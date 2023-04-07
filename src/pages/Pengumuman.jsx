import React from "react";
import "../styles/Report.css";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Pengumuman = () => {
  const shareUrl = "https://bnpb.go.id/berita/banjir-bandang-terjang-sumbawa-belasan-rumah-hanyut-dan-hewan-ternak-mati";
  // const shareUrl = window.location.href;
  return (
    <>
      <br />
      <br />
      <div class="row">
        <div class="col-7">
          <h5 className="ml-5" style={{marginRight:"70%"}}>Artikel</h5>
          <div className="AnnouncementPage-announcement-info">
        <div style={{marginRight:"45%"}}>
            <span> <FontAwesomeIcon icon={faPencilAlt} />&nbsp;Jimmy Pangaribuan</span> &nbsp; &nbsp;
          <span><FontAwesomeIcon icon={faCalendar} />&nbsp;26 Oktober 2022</span>
        </div>
        </div>
          <h3 style={{marginLeft:"88px",textAlign:"justify"}}>
            Tim BPBD Toba Bersama Basarnas Lakukan Pencarian Warga Tenggelam
          </h3>{" "}
          <br />
          <img
            src="/assets/images/banjirr.jpg"
            alt="Logo Kebencanaan"
            style={{ width: "817px", height: "398px" }}
          />{" "}
          <br />
          <p
            style={{
              textAlign: "justify",
              margin: "40px",
              fontFamily: "Roboto",
            }}
          >
            Tim BPBD (Badan Penanggulangan Bencana Daerah) Kabupaten Toba
            bersama Basarnas Danau Toba melakukan pencarian terhadap seorang
            yang diduga tenggelam di perairan Danau Toba di pantai pasir putih
            Parparean, Kecamatan Porsea, Kabupaten Toba, Senin (24/10/2022).{" "}
            <br />
            Informasi yang berhasil dihimpun, sebelum kejadian, korban Robbi
            Hutauruk (43) diduga tenggelam. Warga Pematang Siantar bersama
            rombongan sedang melakukan kegiatan rohani di pantai pasir putih
            Parparean pada hari Minggu (23/10/2022). Pada hari yang sama korban
            dinyatakan hilang oleh pihak keluarga pada pukul 13.00 WIB. Kepala
            BPBD Toba dr Pontas Batubara, menjelaskan, atas informasi orang
            tenggelam yang diperoleh pada hari Minggu ((23/10/2022) pukul 15.00
            WIB, pihaknya langsung turun ke lokasi kejadian dan melakukan upaya
            pencarian. <br />
            “Kami mendapat info sekitar jam 15.00 WIB hari Minggu dan langsung
            melakukan kunjungan untuk memproses seperti apa kejadiannya dan
            langsung melakukan pencarian menyusur tempat-tempat yang dicurugai.
            Sampai jam 5 dilakukan pencarian tidak ditemukan tanda di mana yang
            bersangkutan tenggelam,” terangnya. Tim BPBD Toba, sebutnya, terus
            melakukan upaya pencarian terhadap korban diduga tenggelam hingga 3
            hari ke depan. “Kami menurunkan 2 penyelam dan pihak Basarnas 4
            penyelam jadi 6 ditambah tadi ada komunitas Spear fishing melakukan
            penyisiran juga. Kami tadi sudah sepakat 3 hari ke depan terhitung
            mulai sekarang untik bisa mencari bapak Robbi Hutauruk,” sebutnya.
            Komandan Regu Tim Basarnas Danau Toba, Herlan menyebutkan lokasi
            yang sangat luas diakui menjadi kendala dari tim yang melakukan
            pencarian.
          </p>
        </div>
        <div class="col-5 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">PENGUMUMAN LAINNYA</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Pengumuman 1</a>
                </li>
                <li>
                  <a href="#">Pengumuman 2</a>
                </li>
                <li>
                  <a href="#">Pengumuman 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="link-share position-fixed">
        <div className="py-1 share-link-item shadow-sm">
          <FacebookShareButton
            url={shareUrl}
            quote={"Berita Terkina"}
            hashtag={"#BPBD Toba"}
          >
            {(shareUrl) => (
              <span className="myShareCountWrapper">{shareUrl}</span>
            )}
            <FacebookIcon size={45} round={true} />
          </FacebookShareButton>
        </div>
        <div className="py-1 share-link-item shadow-sm">
          <WhatsappShareButton
            url={shareUrl}
            quote={"Berita Terkina"}
            hashtag={"#BPBD Toba"}
          >
            {(shareUrl) => (
              <span className="myShareCountWrapper">{shareUrl}</span>
            )}
            <WhatsappIcon size={45} round={true} />
          </WhatsappShareButton>
        </div>
        <div className="py-1 share-link-item shadow-sm">
          <TelegramShareButton
            TelegramShareButton
            url={shareUrl}
            quote={"Berita Terkina"}
            hashtag={"#BPBD Toba"}
          >
            {(shareUrl) => (
              <span className="myShareCountWrapper">{shareUrl}</span>
            )}
            <TelegramIcon size={45} round={true} />
          </TelegramShareButton>
        </div>
        <div className="py-1 share-link-item shadow-sm">
          <EmailShareButton
            url={shareUrl}
            quote={"Berita Terkina"}
            hashtag={"#BPBD Toba"}
          >
            {(shareUrl) => (
              <span className="myShareCountWrapper">{shareUrl}</span>
            )}
            <EmailIcon size={45} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </>
  );
};
export default Pengumuman;
