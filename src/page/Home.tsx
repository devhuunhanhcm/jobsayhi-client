import CategoriesSlide from '../components/layouts/CategoriesSlide';
import Joblist from '../components/layouts/JobList';

function Home() {
    return (
        <>
            <main className="main">
                <section className="section-box">
                    <div className="banner-hero hero-2 hero-3">
                        <div className="banner-inner">
                            <div className="block-banner">
                                <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">
                                    Hiring or Find your next job
                                </h1>

                                <div
                                    className="form-find mt-40 wow animate__animated animate__fadeIn"
                                    data-wow-delay=".2s"
                                >
                                    <form>
                                        <div className="box-industry">
                                            <select className="form-input mr-10 select-active input-industry">
                                                <option value={0}>Industry</option>
                                                <option value={1}>Software</option>
                                                <option value={2}>Finance</option>
                                                <option value={3}>Recruting</option>
                                                <option value={4}>Management</option>
                                                <option value={5}>Advertising</option>
                                                <option value={6}>Development</option>
                                            </select>
                                        </div>
                                        <select className="form-input mr-10 select-active">
                                            <option value="">Location</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="PW">Belau</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BV">Bouvet Island</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="VG">British Virgin Islands</option>
                                            <option value="BN">Brunei</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (Keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CG">Congo (Brazzaville)</option>
                                            <option value="CD">Congo (Kinshasa)</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">CuraÇao</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands</option>
                                            <option value="FO">Faroe Islands</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="GF">French Guiana</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="TF">French Southern Territories</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GP">Guadeloupe</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="GY">Guyana</option>
                                            <option value="HT">Haiti</option>
                                            <option value="HM">Heard Island and McDonald Islands</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="CI">Ivory Coast</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Laos</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao S.A.R., China</option>
                                            <option value="MK">Macedonia</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="YT">Mayotte</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia</option>
                                            <option value="MD">Moldova</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="AN">Netherlands Antilles</option>
                                            <option value="NC">New Caledonia</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="KP">North Korea</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PS">Palestinian Territory</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PN">Pitcairn</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="QA">Qatar</option>
                                            <option value="IE">Republic of Ireland</option>
                                            <option value="RE">Reunion</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russia</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="ST">São Tomé and Príncipe</option>
                                            <option value="BL">Saint Barthélemy</option>
                                            <option value="SH">Saint Helena</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="SX">Saint Martin (Dutch part)</option>
                                            <option value="MF">Saint Martin (French part)</option>
                                            <option value="PM">Saint Pierre and Miquelon</option>
                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                            <option value="SM">San Marino</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="GS">South Georgia/Sandwich Islands</option>
                                            <option value="KR">South Korea</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syria</option>
                                            <option value="TW">Taiwan</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TL">Timor-Leste</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom (UK)</option>
                                            <option value="US">USA (US)</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VA">Vatican</option>
                                            <option value="VE">Venezuela</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="WF">Wallis and Futuna</option>
                                            <option value="EH">Western Sahara</option>
                                            <option value="WS">Western Samoa</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                        <input
                                            className="form-input input-keysearch mr-10"
                                            type="text"
                                            placeholder="Your keyword... "
                                        />
                                        <button className="btn btn-default btn-find font-sm">Search</button>
                                    </form>
                                </div>
                                <div
                                    className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <strong>Popular Searches:</strong>
                                    <a href="#">Designer</a>, <a href="#">Web</a>, <a href="#">IOS</a>,{' '}
                                    <a href="#">Developer</a>, <a href="#">PHP</a>, <a href="#">Senior</a>,{' '}
                                    <a href="#">Engineer</a>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-60">
                            <div className="box-swiper mt-50">
                                <CategoriesSlide />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                Jobs of the day
                            </h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                Search and connect with the right candidates faster.
                            </p>
                            <div className="list-tabs mt-40">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li>
                                        <a
                                            className="active"
                                            id="nav-tab-job-1"
                                            href="#tab-job-1"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-job-1"
                                            aria-selected="true"
                                        >
                                            <img src="assets/imgs/page/homepage1/management.svg" alt="jobBox" />{' '}
                                            Management
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id="nav-tab-job-2"
                                            href="#tab-job-2"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-job-2"
                                            aria-selected="false"
                                        >
                                            <img src="assets/imgs/page/homepage1/marketing.svg" alt="jobBox" />{' '}
                                            Marketing &amp; Sale
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id="nav-tab-job-3"
                                            href="#tab-job-3"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-job-3"
                                            aria-selected="false"
                                        >
                                            <img src="assets/imgs/page/homepage1/finance.svg" alt="jobBox" /> Finance
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id="nav-tab-job-4"
                                            href="#tab-job-4"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-job-4"
                                            aria-selected="false"
                                        >
                                            <img src="assets/imgs/page/homepage1/human.svg" alt="jobBox" /> Human
                                            Resource
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id="nav-tab-job-5"
                                            href="#tab-job-5"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-job-5"
                                            aria-selected="false"
                                        >
                                            <img src="assets/imgs/page/homepage1/retail.svg" alt="jobBox" /> Retail
                                            &amp; Products
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id="nav-tab-job-6"
                                            href="#tab-job-6"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="tab-job-6"
                                            aria-selected="false"
                                        >
                                            <img src="assets/imgs/page/homepage1/content.svg" alt="jobBox" /> Content
                                            Writer
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="tab-content" id="myTabContent-1">
                                <div
                                    className="tab-pane fade show active"
                                    id="tab-job-1"
                                    role="tabpanel"
                                    aria-labelledby="tab-job-1"
                                >
                                    <Joblist />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-job-2"
                                    role="tabpanel"
                                    aria-labelledby="tab-job-2"
                                >
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">
                                                            UX Designer &amp; Researcher remote
                                                        </a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy{' '}
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Java
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            C++
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Swift
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UI / UX Designer fulltime</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            PHP
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-3.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$350</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-4.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$100</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Java Software Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-5.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$50</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Frontend Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-6.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$120</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-7.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$150</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-8.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$160</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Lead Quality Control QA</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-9.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UX Designer &amp; Researcher</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-10.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-job-3"
                                    role="tabpanel"
                                    aria-labelledby="tab-job-3"
                                >
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">
                                                            UX Designer &amp; Researcher remote
                                                        </a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy{' '}
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Java
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            C++
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Swift
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UI / UX Designer fulltime</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            PHP
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-3.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$350</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-4.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$100</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Java Software Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-5.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$50</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Frontend Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-6.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$120</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-7.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$150</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-8.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$160</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Lead Quality Control QA</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-9.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UX Designer &amp; Researcher</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-10.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-job-4"
                                    role="tabpanel"
                                    aria-labelledby="tab-job-4"
                                >
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">
                                                            UX Designer &amp; Researcher remote
                                                        </a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy{' '}
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Java
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            C++
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Swift
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UI / UX Designer fulltime</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            PHP
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-3.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$350</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-4.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$100</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Java Software Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-5.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$50</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Frontend Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-6.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$120</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-7.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$150</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-8.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$160</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Lead Quality Control QA</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-9.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UX Designer &amp; Researcher</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-10.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-job-5"
                                    role="tabpanel"
                                    aria-labelledby="tab-job-5"
                                >
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">
                                                            UX Designer &amp; Researcher remote
                                                        </a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy{' '}
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Java
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            C++
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Swift
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UI / UX Designer fulltime</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            PHP
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-3.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$350</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-4.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$100</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Java Software Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-5.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$50</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Frontend Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-6.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$120</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-7.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$150</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-8.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$160</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Lead Quality Control QA</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-9.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UX Designer &amp; Researcher</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-10.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-job-6"
                                    role="tabpanel"
                                    aria-labelledby="tab-job-6"
                                >
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">
                                                            UX Designer &amp; Researcher remote
                                                        </a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy{' '}
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Java
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            C++
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Swift
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UI / UX Designer fulltime</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            PHP
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Python
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            JavaScript
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-3.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$350</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Full Stack Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-4.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$100</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Java Software Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-5.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$50</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Frontend Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-6.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$120</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-7.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$150</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-8.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$160</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Lead Quality Control QA</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-9.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">UX Designer &amp; Researcher</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-10.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">React Native Web Developer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6>
                                                        <a href="job-details.html">Senior System Engineer</a>
                                                    </h6>
                                                    <div className="mt-5">
                                                        <span className="card-briefcase mr-15">Remote</span>
                                                        <span className="card-time">3 mins ago</span>
                                                    </div>
                                                    <div className="mt-20 border-bottom pb-20">
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Illustrator
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Adobe XD
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Figma
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Sketch
                                                        </a>
                                                        <a
                                                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                                                            href="jobs-grid.html"
                                                        >
                                                            Lunacy
                                                        </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/brands/brand-2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">
                                                                            Linkedin
                                                                        </h6>
                                                                        <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                                                            New York, US
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end">
                                                                <span className="card-text-price">$200</span>
                                                                <span className="text-muted">/Hour</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                Top Candidates
                            </h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                Jobs is a curated job board of the best jobs for developers, designers and marketers in
                                the tech industry.
                            </p>
                        </div>
                        <div className="mt-50">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user1.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Robert Fox</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user2.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Cody Fisher</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">Python developer</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user3.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Jerome Bell</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">Content Manager</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user4.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Jane Cooper</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">Network</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user5.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Floyd Miles</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">Photo Editing</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user6.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Devon Lane</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">Online Marketing</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user7.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Jerome Bell</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card-grid-2 hover-up">
                                        <div className="card-grid-2-image-left">
                                            <div className="card-grid-2-image-rd online">
                                                <a href="candidate-details.html">
                                                    <figure>
                                                        <img alt="jobBox" src="assets/imgs/page/candidates/user8.png" />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="card-profile pt-10">
                                                <a href="candidate-details.html">
                                                    <h5>Eleanor</h5>
                                                </a>
                                                <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                <div className="rate-reviews-small pt-5">
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span>
                                                        <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                    </span>
                                                    <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block-info">
                                            <p className="font-xs color-text-paragraph-2">
                                                | Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                                                repellendus magni, atque delectus molestias quis?
                                            </p>
                                            <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                <div className="text-start">
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Figma
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Adobe XD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        PSD
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        App
                                                    </a>
                                                    <a className="btn btn-tags-sm mb-10 mr-5" href="jobs-grid.html">
                                                        Digital
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="employers-info align-items-center justify-content-center mt-15">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <span className="d-flex align-items-center">
                                                            <i className="fi-rr-marker mr-5 ml-0" />
                                                            <span className="font-sm color-text-mutted">
                                                                Chicago, US
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <i className="fi-rr-clock mr-5" />
                                                            <span className="font-sm color-brand-1">$45 / hour</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-40 mb-60">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <a
                                            className="btn btn-brand-1 btn-icon-load mt--30 hover-up"
                                            href="blog-grid.html"
                                        >
                                            Load More Posts
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-50">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                Top Recruiters
                            </h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                Discover your next career move, freelance gig, or internship
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="box-swiper mt-50">
                            <div className="swiper-container swiper-group-1 swiper-style-2 swiper">
                                <div className="swiper-wrapper pt-5">
                                    <div className="swiper-slide">
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-1.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Linkedin</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>68</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            25<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-2.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Adobe</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>42</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            17<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-3.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Dailymotion</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>46</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            65<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-4.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>NewSum</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>68</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            25<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-5.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>PowerHome</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>87</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            34<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-6.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Whop.com</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>34</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            56<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-7.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Greewood</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>124</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            78<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-8.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Kentucky</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>54</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            98<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-9.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Qeuity</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>76</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            90<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-10.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Honda</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>89</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            34<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-5.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Toyota</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>34</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            26<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-3.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Lexuxs</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>27</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            54<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-6.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Ondo</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>54</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            58<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-2.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Square</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>16</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            37<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                            <a href="#">
                                                <div className="item-logo">
                                                    <div className="image-left">
                                                        <img alt="jobBox" src="assets/imgs/brands/brand-8.png" />
                                                    </div>
                                                    <div className="text-info-right">
                                                        <h4>Vista</h4>
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                        <span className="font-xs color-text-mutted ml-10">
                                                            <span>(</span>
                                                            <span>97</span>
                                                            <span>)</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-info-bottom mt-5">
                                                        <span className="font-xs color-text-mutted icon-location">
                                                            New York, US
                                                        </span>
                                                        <span className="font-xs color-text-mutted float-end mt-5">
                                                            43<span> Open Jobs</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-next swiper-button-next-1" />
                            <div className="swiper-button-prev swiper-button-prev-1" />
                        </div>
                    </div>
                </section>

                <section className="section-box mt-50 mb-50">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                News and Blog
                            </h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                Get the latest news, updates and tips
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="mt-50">
                            <div className="box-swiper style-nav-top">
                                <div className="swiper-container swiper-group-3 swiper">
                                    <div className="swiper-wrapper pb-70 pt-5">
                                        <div className="swiper-slide">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                                                <div className="text-center card-grid-3-image">
                                                    <a href="#">
                                                        <figure>
                                                            <img
                                                                alt="jobBox"
                                                                src="assets/imgs/page/homepage1/img-news1.png"
                                                            />
                                                        </figure>
                                                    </a>
                                                </div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15">
                                                        <a className="btn btn-tag" href="blog-grid.html">
                                                            News
                                                        </a>
                                                    </div>
                                                    <h5>
                                                        <a href="blog-details.html">
                                                            21 Job Interview Tips: How To Make a Great Impression
                                                        </a>
                                                    </h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">
                                                        Our mission is to create the world&amp;rsquo;s most sustainable
                                                        healthcare company by creating high-quality healthcare products
                                                        in iconic, sustainable packaging.
                                                    </p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/page/homepage1/user1.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <span className="font-sm font-bold color-brand-1 op-70">
                                                                            Sarah Harding
                                                                        </span>
                                                                        <br />
                                                                        <span className="font-xs color-text-paragraph-2">
                                                                            06 September
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15">
                                                                <span className="color-text-paragraph-2 font-xs">
                                                                    8 mins to read
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                                                <div className="text-center card-grid-3-image">
                                                    <a href="#">
                                                        <figure>
                                                            <img
                                                                alt="jobBox"
                                                                src="assets/imgs/page/homepage1/img-news2.png"
                                                            />
                                                        </figure>
                                                    </a>
                                                </div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15">
                                                        <a className="btn btn-tag" href="blog-grid.html">
                                                            Events
                                                        </a>
                                                    </div>
                                                    <h5>
                                                        <a href="blog-details.html">
                                                            39 Strengths and Weaknesses To Discuss in a Job Interview
                                                        </a>
                                                    </h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">
                                                        Our mission is to create the world&amp;rsquo;s most sustainable
                                                        healthcare company by creating high-quality healthcare products
                                                        in iconic, sustainable packaging.
                                                    </p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/page/homepage1/user2.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <span className="font-sm font-bold color-brand-1 op-70">
                                                                            Steven Jobs
                                                                        </span>
                                                                        <br />
                                                                        <span className="font-xs color-text-paragraph-2">
                                                                            06 September
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15">
                                                                <span className="color-text-paragraph-2 font-xs">
                                                                    6 mins to read
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                                                <div className="text-center card-grid-3-image">
                                                    <a href="#">
                                                        <figure>
                                                            <img
                                                                alt="jobBox"
                                                                src="assets/imgs/page/homepage1/img-news3.png"
                                                            />
                                                        </figure>
                                                    </a>
                                                </div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15">
                                                        <a className="btn btn-tag" href="blog-grid.html">
                                                            News
                                                        </a>
                                                    </div>
                                                    <h5>
                                                        <a href="blog-details.html">
                                                            Interview Question: Why Dont You Have a Degree?
                                                        </a>
                                                    </h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">
                                                        Learn how to respond if an interviewer asks you why you dont
                                                        have a degree, and read example answers that can help you craft
                                                    </p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex">
                                                                    <img
                                                                        className="img-rounded"
                                                                        src="assets/imgs/page/homepage1/user3.png"
                                                                        alt="jobBox"
                                                                    />
                                                                    <div className="info-right-img">
                                                                        <span className="font-sm font-bold color-brand-1 op-70">
                                                                            Wiliam Kend
                                                                        </span>
                                                                        <br />
                                                                        <span className="font-xs color-text-paragraph-2">
                                                                            06 September
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15">
                                                                <span className="color-text-paragraph-2 font-xs">
                                                                    9 mins to read
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                            </div>
                            <div className="text-center">
                                <a className="btn btn-brand-1 btn-icon-load mt--30 hover-up" href="blog-grid.html">
                                    Load More Posts
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
