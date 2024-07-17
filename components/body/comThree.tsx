import { Box, Grid } from '@mui/material';
import React from 'react'
import { Cardtext, Medium_text } from '../typography';
import FeatureCard from '../iconbox';
import style from './body.module.css'

const ComThree = () => {
    const mobile = (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" style={{ padding: '15px 10px' }} viewBox="0 0 36 36" fill="none">
            <path d="M15 15C13.3507 15 12.0002 13.6495 12.0002 12.0002V0H3.00017C1.35046 0 0 1.35046 0 3.00017V33.0001C0 34.6498 1.35046 36.0003 3.00017 36.0003H21.0003C22.6496 36.0003 24 34.6498 24 33.0001V15H15ZM13.5001 33.0001H10.4999C9.67102 33.0001 9.00007 32.3296 9.00007 31.5002C9.00007 30.6709 9.67102 30.0004 10.4999 30.0004H13.5001C14.3295 30.0004 15 30.6709 15 31.5002C15 32.3296 14.3295 33.0001 13.5001 33.0001ZM35.5597 4.93969L31.3697 0.750155L29.779 2.34272L33.4397 6.00034L29.7808 9.65977L31.3715 11.2501L35.5611 7.06055C35.7004 6.92128 35.8109 6.75591 35.8862 6.57391C35.9615 6.3919 36.0002 6.19682 36.0001 5.99984C36 5.80286 35.961 5.60783 35.8855 5.42592C35.8099 5.244 35.6992 5.07878 35.5597 4.93969Z" fill="url(#paint0_linear_6_4566)" />
            <path d="M21.2211 2.34092L19.6304 0.750156L15.4395 4.93969C15.3002 5.07897 15.1897 5.24432 15.1143 5.42631C15.0389 5.6083 15.0001 5.80336 15.0001 6.00034C15.0001 6.19733 15.0389 6.39239 15.1143 6.57438C15.1897 6.75637 15.3002 6.92172 15.4395 7.061L19.6304 11.2501L21.2211 9.65932L17.5604 5.99989L21.2211 2.34092ZM25.1177 0H27.3839L25.885 12.0002H23.6174L25.1177 0Z" fill="url(#paint1_linear_6_4566)" />
            <defs>
                <linearGradient id="paint0_linear_6_4566" x1="18.0001" y1="0" x2="18.0001" y2="36.0003" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint1_linear_6_4566" x1="21.192" y1="0" x2="21.192" y2="12.0002" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
            </defs>
        </svg>
    )
    const network = (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" style={{ padding: '15px 10px' }} viewBox="0 0 36 32" fill="none">
            <path d="M0.72 32H4.716C5.112 32 5.436 31.6781 5.436 31.2684V24.0037C5.436 23.594 5.112 23.2721 4.716 23.2721H0.72C0.324 23.2721 0 23.594 0 24.0037V31.2684C0 31.6781 0.324 32 0.72 32ZM27.6408 32C28.0368 32 28.3608 31.6781 28.3608 31.2684V9.38637C28.3608 8.984 28.0368 8.65478 27.6408 8.65478H23.6448C23.2488 8.65478 22.9248 8.984 22.9248 9.38637V31.2684C22.9248 31.6781 23.2488 32 23.6448 32H27.6408ZM19.908 32C20.304 32 20.628 31.6781 20.628 31.2684V13.7101C20.628 13.3077 20.304 12.9785 19.908 12.9785H15.912C15.516 12.9785 15.192 13.3077 15.192 13.7101V31.2684C15.192 31.6781 15.516 32 15.912 32H19.908ZM35.28 0H31.284C30.888 0 30.564 0.321902 30.564 0.731596V31.2684C30.564 31.6781 30.888 32 31.284 32H35.28C35.676 32 36 31.6781 36 31.2684V0.731596C36 0.321902 35.676 0 35.28 0ZM12.3552 32C12.7512 32 13.0752 31.6781 13.0752 31.2684V18.5825C13.0752 18.1728 12.7512 17.8509 12.3552 17.8509H8.3592C7.9632 17.8509 7.6392 18.1728 7.6392 18.5825V31.2684C7.6392 31.6781 7.9632 32 8.3592 32H12.3552Z" fill="url(#paint0_linear_6_4576)" />
            <defs>
                <linearGradient id="paint0_linear_6_4576" x1="18" y1="0" x2="18" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
            </defs>
        </svg>
    );
    const people = (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" style={{ padding: '13px 10px' }} viewBox="0 0 33 36" fill="none">
            <path d="M32.6608 0H0V16.3304H12.6071C13.1396 15.9907 13.7224 15.7372 14.334 15.5792C13.6203 15.1439 13.0685 14.4872 12.7627 13.7092C12.4568 12.9311 12.4136 12.0745 12.6397 11.2697C12.8658 10.4648 13.3488 9.75599 14.0151 9.25109C14.6814 8.7462 15.4944 8.47293 16.3304 8.47293C17.1664 8.47293 17.9794 8.7462 18.6457 9.25109C19.312 9.75599 19.795 10.4648 20.0211 11.2697C20.2472 12.0745 20.204 12.9311 19.8981 13.7092C19.5923 14.4872 19.0405 15.1439 18.3268 15.5792C18.9384 15.7372 19.5212 15.9907 20.0537 16.3304H32.6608V0ZM13.2603 8.90415V9.00214C13.2554 9.06535 13.2458 9.12812 13.2317 9.18993C13.2273 9.22171 13.2205 9.2531 13.2113 9.28383C13.2113 9.33691 13.1827 9.38998 13.1623 9.43897C13.1504 9.471 13.1368 9.50234 13.1215 9.53287C13.1049 9.57216 13.0858 9.61034 13.0643 9.64719L13.0031 9.73292C12.9821 9.76558 12.9575 9.79571 12.9296 9.82274C12.9099 9.8465 12.888 9.86837 12.8643 9.88806C12.8323 9.91773 12.7982 9.94502 12.7622 9.96971L12.7336 9.99421C12.6872 10.0161 12.6395 10.0351 12.5907 10.0514C12.5581 10.0514 12.5336 10.0799 12.505 10.0881C12.4132 10.1129 12.3184 10.1252 12.2233 10.1249H12.1825L8.57346 10.823L9.79824 13.0072C9.82512 13.0537 9.84256 13.105 9.84957 13.1582C9.85657 13.2115 9.853 13.2656 9.83907 13.3174C9.82513 13.3696 9.801 13.4184 9.76806 13.4612C9.73512 13.5039 9.69404 13.5397 9.64719 13.5665L7.60589 14.7341C7.55929 14.7611 7.50781 14.7786 7.45442 14.7856C7.40103 14.7926 7.34678 14.789 7.29479 14.775C7.2428 14.7609 7.19411 14.7368 7.1515 14.7038C7.1089 14.6709 7.07324 14.6298 7.04657 14.5831L5.25431 11.4558L4.74806 11.5538C4.60409 11.5813 4.45781 11.595 4.31123 11.5946C3.86405 11.5941 3.42644 11.465 3.05059 11.2227C2.67473 10.9804 2.3765 10.6352 2.19146 10.2281C2.00641 9.82097 1.94236 9.36924 2.00695 8.92674C2.07153 8.48425 2.26203 8.06967 2.55571 7.73245L7.49566 2.08621L7.5324 2.02905C7.56518 1.97362 7.60348 1.92164 7.64671 1.87391L7.70387 1.81267C7.74572 1.77357 7.79079 1.73807 7.83859 1.70653L7.87125 1.68203H7.91208C8.23461 1.52281 8.7286 1.49015 9.51246 2.02497C9.63494 2.11479 9.76966 2.21277 9.92072 2.33525C10.7346 3.07925 11.4237 3.94901 11.962 4.91137C12.5265 5.84342 12.9399 6.85894 13.1868 7.92025C13.1868 7.94066 13.1868 7.95699 13.1868 7.97332C13.1868 8.0958 13.2276 8.21419 13.2399 8.32851C13.2521 8.44282 13.2399 8.48773 13.2399 8.56121C13.2399 8.6347 13.2399 8.64695 13.2399 8.68369C13.2399 8.72044 13.2644 8.83475 13.2603 8.90415ZM29.9214 13.7135H21.9807C21.8724 13.7135 21.7686 13.6704 21.692 13.5939C21.6155 13.5173 21.5725 13.4135 21.5725 13.3052C21.5725 13.1969 21.6155 13.0931 21.692 13.0165C21.7686 12.9399 21.8724 12.8969 21.9807 12.8969H29.9214C30.0297 12.8969 30.1335 12.9399 30.2101 13.0165C30.2866 13.0931 30.3296 13.1969 30.3296 13.3052C30.3296 13.4135 30.2866 13.5173 30.2101 13.5939C30.1335 13.6704 30.0297 13.7135 29.9214 13.7135ZM29.9214 10.2596H21.9807C21.8724 10.2596 21.7686 10.2166 21.692 10.14C21.6155 10.0634 21.5725 9.95959 21.5725 9.85132C21.5725 9.74304 21.6155 9.6392 21.692 9.56263C21.7686 9.48607 21.8724 9.44306 21.9807 9.44306H29.9214C30.0297 9.44306 30.1335 9.48607 30.2101 9.56263C30.2866 9.6392 30.3296 9.74304 30.3296 9.85132C30.3296 9.95959 30.2866 10.0634 30.2101 10.14C30.1335 10.2166 30.0297 10.2596 29.9214 10.2596ZM29.9214 6.80161H21.9807C21.8724 6.80161 21.7686 6.7586 21.692 6.68204C21.6155 6.60547 21.5725 6.50163 21.5725 6.39335C21.5725 6.28508 21.6155 6.18123 21.692 6.10467C21.7686 6.02811 21.8724 5.98509 21.9807 5.98509H29.9214C30.0297 5.98509 30.1335 6.02811 30.2101 6.10467C30.2866 6.18123 30.3296 6.28508 30.3296 6.39335C30.3296 6.50163 30.2866 6.60547 30.2101 6.68204C30.1335 6.7586 30.0297 6.80161 29.9214 6.80161ZM29.9214 3.34773H24.8018C24.6935 3.34773 24.5897 3.30472 24.5131 3.22816C24.4366 3.15159 24.3935 3.04775 24.3935 2.93947C24.3935 2.8312 24.4366 2.72735 24.5131 2.65079C24.5897 2.57423 24.6935 2.53121 24.8018 2.53121H29.9214C30.0297 2.53121 30.1335 2.57423 30.2101 2.65079C30.2866 2.72735 30.3296 2.8312 30.3296 2.93947C30.3296 3.04775 30.2866 3.15159 30.2101 3.22816C30.1335 3.30472 30.0297 3.34773 29.9214 3.34773Z" fill="url(#paint0_linear_6_4584)" />
            <path d="M6.12396 11.2925L7.57737 13.8237L8.90421 13.0603L7.71209 10.9863L6.12396 11.2925Z" fill="url(#paint1_linear_6_4584)" />
            <path d="M10.1126 8.86323L10.0759 8.82648C10.055 8.79745 10.0318 8.77014 10.0065 8.74483C9.92076 8.64685 9.83502 8.54887 9.74929 8.44272L9.66355 8.33657C9.54924 8.19368 9.43493 8.04671 9.3247 7.89157C9.21447 7.73643 9.10424 7.57312 8.99401 7.40574L8.94502 7.34858C8.83479 7.17711 8.72864 7.00564 8.62249 6.82193C8.51634 6.63821 8.42653 6.46266 8.33263 6.28302L8.2918 6.20545C8.20198 6.0299 8.12033 5.85435 8.04276 5.68288C7.96519 5.51141 7.89579 5.33994 7.83047 5.17256L7.75698 5.00517C7.71207 4.87861 7.66716 4.75613 7.63042 4.63365L7.59368 4.5275V4.48668C7.55285 4.34379 7.51202 4.20498 7.47936 4.07842C7.47936 4.0131 7.45078 3.95186 7.43854 3.89062L7.41404 3.76814C7.41209 3.74368 7.41209 3.71911 7.41404 3.69465C7.41404 3.63342 7.38955 3.56809 7.38138 3.50685L3.19671 8.27125C2.98912 8.50821 2.86081 8.80414 2.82973 9.11763C2.79865 9.43112 2.86636 9.74648 3.02338 10.0196C3.18041 10.2927 3.41889 10.5099 3.70545 10.6407C3.99201 10.7716 4.31232 10.8096 4.62154 10.7494L10.8516 9.55319C10.6226 9.36287 10.407 9.15688 10.2065 8.93671L10.1126 8.86323ZM9.42268 2.91488C9.15706 2.62568 8.80453 2.43079 8.41836 2.35964C8.38317 2.35787 8.3481 2.36489 8.3163 2.38006C8.16116 2.46987 8.04684 2.98428 8.3163 3.99268C9.07974 4.05801 9.94934 4.71122 10.5209 5.71962C11.1006 6.72803 11.2313 7.80175 10.9006 8.49171C11.6355 9.22658 12.1254 9.3858 12.2968 9.30823C12.6275 9.11635 12.5663 7.52822 11.2803 5.29095C10.7931 4.40401 10.1659 3.60164 9.42268 2.91488Z" fill="url(#paint2_linear_6_4584)" />
            <path d="M10.2515 7.75675C10.2593 7.18031 10.1021 6.61367 9.79832 6.12371C9.52827 5.60838 9.11405 5.1828 8.6062 4.89893C8.81118 5.41094 9.05268 5.90758 9.32882 6.38499C9.6044 6.86296 9.91269 7.32131 10.2515 7.75675ZM19.3475 12.3129C19.3475 11.7162 19.1706 11.1329 18.8391 10.6368C18.5075 10.1406 18.0363 9.7539 17.4851 9.52555C16.9338 9.29719 16.3271 9.23745 15.7419 9.35386C15.1566 9.47027 14.6191 9.75762 14.1971 10.1796C13.7752 10.6015 13.4878 11.1391 13.3714 11.7243C13.255 12.3096 13.3147 12.9162 13.5431 13.4675C13.7715 14.0188 14.1582 14.49 14.6543 14.8215C15.1505 15.153 15.7338 15.33 16.3305 15.33C17.1303 15.3289 17.8971 15.0107 18.4627 14.4451C19.0282 13.8795 19.3464 13.1128 19.3475 12.3129ZM11.6967 18.2817H20.9642C20.0906 17.1018 18.6616 16.1465 16.3305 16.1465C13.9993 16.1465 12.5704 17.1018 11.6967 18.2817ZM4.44195 32.3381H9.79832C10.3005 30.5581 11.5008 28.28 14.33 27.537C13.6055 27.0984 13.0446 26.4347 12.7327 25.6473C12.4209 24.8599 12.3753 23.9921 12.603 23.1764C12.8307 22.3607 13.3191 21.642 13.9936 21.1299C14.6682 20.6179 15.4918 20.3407 16.3386 20.3407C17.1855 20.3407 18.0091 20.6179 18.6837 21.1299C19.3582 21.642 19.8466 22.3607 20.0743 23.1764C20.302 23.9921 20.2564 24.8599 19.9446 25.6473C19.6327 26.4347 19.0717 27.0984 18.3473 27.537C21.1765 28.28 22.3768 30.5581 22.879 32.3381H28.2231L29.9215 19.0982H2.7395L4.44195 32.3381Z" fill="url(#paint3_linear_6_4584)" />
            <path d="M16.3304 27.2919C18.0215 27.2919 19.3924 25.921 19.3924 24.2299C19.3924 22.5389 18.0215 21.168 16.3304 21.168C14.6394 21.168 13.2685 22.5389 13.2685 24.2299C13.2685 25.921 14.6394 27.2919 16.3304 27.2919Z" fill="url(#paint4_linear_6_4584)" />
            <path d="M16.3304 28.1084C10.8801 28.1084 10.3045 33.2606 10.2433 34.416C14.3259 36.9921 18.3227 36.9921 22.4176 34.416C22.3563 33.2606 21.7807 28.1084 16.3304 28.1084Z" fill="url(#paint5_linear_6_4584)" />
            <defs>
                <linearGradient id="paint0_linear_6_4584" x1="16.3304" y1="0" x2="16.3304" y2="16.3304" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint1_linear_6_4584" x1="7.51409" y1="10.9863" x2="7.51409" y2="13.8237" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint2_linear_6_4584" x1="7.6445" y1="2.35938" x2="7.6445" y2="10.7772" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint3_linear_6_4584" x1="16.3305" y1="4.89893" x2="16.3305" y2="32.3381" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint4_linear_6_4584" x1="16.3304" y1="21.168" x2="16.3304" y2="27.2919" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint5_linear_6_4584" x1="16.3304" y1="28.1084" x2="16.3304" y2="36.3481" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
            </defs>
        </svg>
    );
    const cloud = (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="27" style={{ padding: '14px 8px' }} viewBox="0 0 36 36" fill="none">
            <path d="M35.0976 13.6312C33.9006 11.1883 31.3175 9.76182 28.6278 9.90389L28.622 9.89875C28.5603 4.42159 24.1606 0 18.7361 0C13.3233 0 8.92611 4.28787 8.8464 9.74703C8.84576 9.8306 8.78469 9.89939 8.70176 9.90132L7.58254 9.92382C6.80918 9.93989 6.12453 10.0228 5.47396 10.2337C2.54509 11.1819 0.345229 13.5084 0.0385853 16.5935C-0.336202 20.3619 2.06102 23.6321 5.41353 24.5649C6.03389 24.7379 6.67996 24.7874 7.32347 24.7874L8.6754 24.788V21.1064H8.68504C8.78854 18.8036 13.529 17.5603 18.0001 17.5603C22.5207 17.5603 27.3247 18.8293 27.3247 21.1816V24.797H28.6651C29.2328 24.7977 29.8036 24.7597 30.3558 24.6254C34.6983 23.5691 37.5449 18.623 35.0976 13.6312ZM18.0001 28.8663C14.7151 28.8663 11.2893 28.1932 9.65705 26.9249V29.3099C9.65705 30.5493 13.2249 31.9353 18.0001 31.9353C22.7752 31.9353 26.3431 30.5493 26.3431 29.3105V26.9242C24.7109 28.1932 21.2851 28.8663 18.0001 28.8663Z" fill="url(#paint0_linear_6_4598)" />
            <path d="M18 32.9309C14.715 32.9309 11.2892 32.2578 9.65698 30.9888V33.3745C9.65698 34.6139 13.2249 35.9999 18 35.9999C22.7752 35.9999 26.343 34.6139 26.343 33.3745V30.9888C24.7108 32.2578 21.285 32.9303 18 32.9303V32.9309ZM26.343 22.8599C24.7108 24.1289 21.285 24.8026 18 24.8026C14.715 24.8026 11.2892 24.1289 9.65698 22.8599V25.2455C9.65698 26.4849 13.2249 27.8709 18 27.8709C22.7752 27.8709 26.343 26.4849 26.343 25.2455V22.8599Z" fill="url(#paint1_linear_6_4598)" />
            <path d="M18 18.5562C13.2249 18.5562 9.65698 19.9422 9.65698 21.1816C9.65698 22.421 13.2249 23.807 18 23.807C22.7752 23.807 26.343 22.421 26.343 21.1816C26.343 19.9422 22.7752 18.5562 18 18.5562Z" fill="url(#paint2_linear_6_4598)" />
            <defs>
                <linearGradient id="paint0_linear_6_4598" x1="18" y1="0" x2="18" y2="31.9353" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint1_linear_6_4598" x1="18" y1="22.8599" x2="18" y2="35.9999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
                <linearGradient id="paint2_linear_6_4598" x1="18" y1="18.5562" x2="18" y2="23.807" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
            </defs>
        </svg>
    )
    const features = [
        {
            icon: mobile,
            title: 'Mobile App',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. odit aperiam illo adipisci cupiditate pariatur.',
        },
        {
            icon: network,
            title: 'SEO',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. odit aperiam illo adipisci cupiditate pariatur.',
        },
        {
            icon: people,
            title: 'Branding Consultation',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. odit aperiam illo adipisci cupiditate pariatur.',
        },
        {
            icon: cloud,
            title: 'Cloud Storage',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. odit aperiam illo adipisci cupiditate pariatur.',
        },
    ];
    return (
        <>
            <Box className={style.container}>
                <Grid container>
                    <Box display={'flex'} gap={14} className={style.column}>
                        <Grid item lg={5} md={12} sm={12} xs={12} className={style.Box}>
                            <Box className={style.colorBox} sx={{ height: '65%', width: '100%', background: '#f3f3ff', borderRadius: 4 }}></Box>
                        </Grid>
                        <Grid item lg={5} md={12} sm={12} xs={12} textAlign={'left'} className={style.responsiveThree}>
                            <Box display={'flex'} flexDirection={'column'} gap={3} sx={{pb:4}}>
                                <Medium_text className={style.text} sx={{ textAlign: 'left', fontSize: 51, width: '100%', lineHeight: 1.2 }} >What would you grade  your social media page?</Medium_text>
                                <Cardtext sx={{ textAlign: 'left' }} width={'100%'}>Monotonectally implement integrated commerce & distributed is
                                    conveniently unleash b2b customer via long.</Cardtext>
                            </Box>
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Box >
        </>
    )
}

export default ComThree;