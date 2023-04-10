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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Pengumuman = () => {
  const shareUrl =
    "https://bnpb.go.id/berita/banjir-bandang-terjang-sumbawa-belasan-rumah-hanyut-dan-hewan-ternak-mati";

  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h5 className="ml-5">Artikel</h5>
            <div className="AnnouncementPage-announcement-info">
              <div>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faPencilAlt} />
                  &nbsp;Jimmy Pangaribuan
                </span>
                &nbsp; &nbsp;
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;26 Oktober 2022
                </span>
              </div>
            </div>
            <h3 style={{ textAlign: "justify" }}>
              Tim BPBD Toba Bersama Basarnas Lakukan Pencarian Warga Tenggelam
            </h3>
            <br />
            <center>
              <img
                src="/assets/images/banjirr.jpg"
                alt="Gambar tidak ditemukan"
                style={{ maxWidth: "100%" }}
              />
            </center>
            <br />
            <p style={{ textAlign: "justify", fontFamily: "Roboto" }}>
              Tim BPBD (Badan Penanggulangan Bencana Daerah) Kabupaten Toba
              bersama Basarnas Danau Toba melakukan pencarian terhadap seorang
              yang diduga tenggelam di perairan Danau Toba di pantai pasir putih
              Parparean, Kecamatan Porsea, Kabupaten Toba, Senin (24/10/2022).{" "}
              <br />
              Informasi yang berhasil dihimpun, sebelum kejadian, korban Robbi
              Hutauruk (43) diduga tenggelam. Warga Pematang Siantar bersama
              rombongan sedang melakukan kegiatan rohani di pantai pasir putih
              Parparean pada hari Minggu (23/10/2022). Pada hari yang sama
              korban dinyatakan hilang oleh pihak keluarga pada pukul 13.00 WIB.
              Kepala BPBD Toba dr Pontas Batubara, menjelaskan, atas informasi
              orang tenggelam yang diperoleh pada hari Minggu ((23/10/2022)
              pukul 15.00 WIB, pihaknya langsung turun ke lokasi kejadian dan
              melakukan upaya pencarian. <br />
              “Kami mendapat info sekitar jam 15.00 WIB hari Minggu dan langsung
              melakukan kunjungan untuk memproses seperti apa kejadiannya dan
              langsung melakukan pencarian menyusur tempat-tempat yang
              dicurugai. Sampai jam 5 dilakukan pencarian tidak ditemukan tanda
              di mana yang bersangkutan tenggelam,” terangnya. Tim BPBD Toba,
              sebutnya, terus melakukan upaya pencarian terhadap korban diduga
              tenggelam hingga 3 hari ke depan. “Kami menurunkan 2 penyelam dan
              pihak Basarnas 4 penyelam jadi 6 ditambah tadi ada komunitas Spear
              fishing melakukan penyisiran juga. Kami tadi sudah sepakat 3 hari
              ke depan terhitung mulai sekarang untik bisa mencari bapak Robbi
              Hutauruk,” sebutnya. Komandan Regu Tim Basarnas Danau Toba, Herlan
              menyebutkan lokasi yang sangat luas diakui menjadi kendala dari
              tim yang melakukan pencarian.
            </p>
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">PENGUMUMAN LAINNYA</h5>
                <ul className="list-unstyled">
                  <li>
                    <div className="media">
                      <img
                        src="/assets/images/banjirr.jpg"
                        alt="Gambar tidak ditemukan"
                        style={{ width: "98px", height: "59px" }}
                      />
                      <div className="media-body">
                        <br />
                        <p style={{textAlign:"left"}}>
                          Bupati Kab.Toba berikan bantuan kepada masyarakat
                          korban kebakaran  
                          <br />
                          <a href="/">Baca selengkapnya</a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media align-items-center">
                      <img
                        src="/assets/images/banjirr.jpg"
                        className="mr-3"
                        alt="Gambar tidak ditemukan"
                        style={{ width: "98px", height: "59px" }}
                      />
                      <div className="media-body">
                      <br />
                      <p style={{textAlign:"left "}}>
                          Pemerintah Kab.Toba serahkan bantuan bagi masyarakat
                          korban bencana angin puting beliung <br />
                          <a href="/">Baca selengkapnya</a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <img
                        src="/assets/images/banjirr.jpg"
                        alt="Gambar tidak ditemukan"
                        style={{ width: "98px", height: "59px" }}
                      />
                      <div className="media-body">
                      <br />
                      <p style={{textAlign:"left"}}>
                          Bupati Kab.Toba berikan bantuan kepada masyarakat
                          korban kebakaran rumah <br />
                          <a href="/">Baca selengkapnya</a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
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
