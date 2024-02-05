// SVGs:
const rock = `<svg
class="rock"
transform="rotate(90)"
xmlns="http://www.w3.org/2000/svg"
width="112"
height="112"
viewBox="0 0 100 100"
fill="none"
>
<path
  class="options-fill"
  d="M35.957 14.3555C29.6094 15.5078 25.4101 20.1562 25.3906 26.0156V27.3438H24.5703C21.9336 27.3633 18.457 28.8086 16.6015 30.6641C15.332 31.9336 14.2187 33.9648 13.8672 35.6836C13.7305 36.3477 13.6719 37.5781 13.7305 38.6719C13.8281 40.7812 14.2969 42.207 15.3515 43.75C16.1133 44.8633 16.1328 44.9609 15.6836 45.332C15.1758 45.7617 14.1601 47.4609 13.6719 48.7305C13.125 50.1562 13.0078 53.3984 13.457 54.9805C14.0625 57.168 15.5469 59.5508 17.1094 60.8984C17.9297 61.582 17.9687 61.6797 17.7734 62.1875C17.6758 62.4805 17.4805 63.3398 17.3633 64.082C16.6797 68.5547 19.4531 73.125 23.8672 74.8242C24.9219 75.2148 24.9805 75.2734 24.8437 75.7617C24.5703 76.7773 24.7265 79.1602 25.1758 80.4688C25.9765 82.8516 27.5976 84.4922 30.0586 85.3711C31.3086 85.8203 31.4844 85.8398 37.6953 85.8398C44.3945 85.8203 46.9726 85.6445 51.8554 84.8633C63.125 83.0469 70.3515 79.0039 73.457 72.7344C74.2187 71.2109 74.5508 70.7227 74.7656 70.8008C79.2187 72.5 83.5742 69.2383 85.4297 62.8125C86.7383 58.3203 87.1875 52.1094 86.7187 45.4102C86.25 39.043 84.9414 34.7656 82.6562 32.2266C80.4687 29.7852 77.3828 29.1016 74.6875 30.4688C74.2773 30.6836 73.8867 30.8594 73.8281 30.8594C73.75 30.8594 73.3008 30.2148 72.793 29.4336C70.5273 25.8398 66.2695 22.9297 61.2305 21.5039C60.3515 21.25 57.4219 19.9609 54.4922 18.5547C48.9648 15.8594 46.3086 14.8633 43.3789 14.375C41.1719 14.0039 37.9492 14.0039 35.957 14.3555ZM42.5781 17.7734C45.0586 18.1641 48.1445 19.3164 52.9101 21.6797C55.9179 23.1836 58.457 24.2773 60.0781 24.8242C65.6055 26.6211 68.789 28.9648 70.4883 32.4609C71.4844 34.5117 71.6992 35.7031 71.6406 38.7695C71.582 41.7969 71.6992 42.207 72.6758 42.5586C73.125 42.7148 73.418 42.6953 73.9258 42.5C75 42.0508 75.0976 41.6797 75.1172 37.9102L75.1562 34.4922L75.664 34.043C77.4805 32.5 79.8047 33.4766 81.25 36.4062C82.5 38.9453 83.125 42.6172 83.3203 48.4375C83.5937 56.4453 82.3633 63.1055 80.0781 65.9961C79.1211 67.207 77.832 67.8711 76.7969 67.6758C75.3515 67.4219 75.2734 67.2656 75.1172 64.8047C74.8828 60.8203 74.5508 60.0586 73.0273 60.0586C72.3828 60.0586 72.1289 60.1758 71.7383 60.625C71.289 61.1719 71.2695 61.2695 71.4258 62.5781C71.6601 64.5508 71.6015 67.3047 71.3086 68.5547C71.1719 69.1406 70.7031 70.3711 70.2734 71.25C66.7383 78.4961 55.039 82.4023 36.914 82.4219C32.3633 82.4219 31.2109 82.2461 30 81.4258C28.2617 80.2344 27.6758 77.3047 28.7695 75.2148C29.414 73.9648 29.4336 73.2227 28.8476 72.5391C28.4765 72.1094 28.1836 72.0117 26.9531 71.875C25.1758 71.6992 23.9062 71.1328 22.7344 69.9805C20.7031 68.0273 20.2539 65.332 21.4648 62.4609C22.2461 60.5859 22.168 60.1367 20.7812 59.2188C17.8906 57.2852 16.3672 54.4336 16.6797 51.5039C16.8555 49.707 17.5781 48.3594 19.1601 46.8555C20.332 45.7227 20.5078 45.4688 20.5078 44.8438C20.5078 44.2578 20.332 43.9844 19.375 43.0273C17.8125 41.4648 17.3242 40.3711 17.2265 38.2812C17.1289 36.2109 17.5976 34.8438 18.8476 33.457C21.6211 30.3516 26.8359 30 34.1992 32.4023C36.0742 33.0078 36.7969 33.1641 37.1289 33.0273C38.3984 32.5391 38.7695 30.9766 37.8125 30.1367C37.1875 29.6094 33.0664 28.2617 30.625 27.793L28.8476 27.4609L28.9453 25.7617C29.1601 21.9727 31.5039 19.1797 35.3515 18.0859C35.9375 17.9297 36.6992 17.7539 37.0117 17.7148C38.2226 17.5586 41.3476 17.5977 42.5781 17.7734Z"
/>
</svg>`;

const paper = `<svg
class="paper"
transform="rotate(-90)"
xmlns="http://www.w3.org/2000/svg"
width="100"
height="100"
viewBox="0 0 100 100"
fill="none"
>
<path
  class="options-fill"
  d="M49.082 6.62111C47.7539 7.10939 46.6211 7.91017 45.3711 9.21877C44.082 10.6055 43.3203 11.7969 41.6992 15.0391C40.0391 18.3789 38.9844 19.8438 37.4609 20.9961C35.9961 22.0899 35.3906 22.4219 30.6055 24.6485C26.1328 26.7188 24.1602 27.8711 22.5781 29.3164L21.3672 30.4297L20.8008 29.961C16.4648 26.4844 9.60937 29.2383 7.20703 35.4297C5.99609 38.5547 4.51172 44.8828 3.80859 49.9024C2.79297 57.2656 2.91016 64.668 4.10156 68.2813C5.01953 71.0352 6.99219 73.3985 9.33594 74.5508C10.625 75.1953 10.9375 75.2735 12.3047 75.2735C13.6719 75.2735 14.0039 75.1953 15.2734 74.5508L16.7188 73.8477L18.418 75.4883C21.2695 78.2422 24.7852 80.3516 28.6523 81.6211C31.1523 82.461 32.9492 82.7735 36.0352 82.9297C40.5469 83.1445 41.6992 83.5547 46.9141 86.836C52.4023 90.2539 58.1055 92.7149 62.3828 93.457C64.668 93.8477 68.0664 93.8477 69.707 93.4375C72.4219 92.7539 74.4141 91.3672 75.3125 89.5313C75.7812 88.5742 75.8203 88.3008 75.7422 86.8555C75.6641 85.332 75.332 84.3555 74.2773 82.4024C74.2383 82.3438 75.1172 82.2266 76.2109 82.168C81.582 81.836 85.4492 79.8633 87.0312 76.6406C87.5195 75.6445 87.5977 75.2539 87.5977 73.8281C87.5977 72.4024 87.5195 72.0117 87.0312 71.0156C86.4062 69.7461 84.9023 68.1445 83.3789 67.1094L82.3828 66.4453L82.9492 66.3477C83.2422 66.2891 84.0234 66.1719 84.668 66.1133C86.582 65.8985 89.2969 65.1172 90.9375 64.3164C92.8516 63.3985 95 61.3672 95.7617 59.7656C96.875 57.461 97.207 54.375 96.5625 52.3828C95.625 49.4922 92.3242 47.2461 87.0312 45.918L84.9023 45.3711L85.7617 44.7656C86.25 44.4531 86.9727 43.8086 87.3828 43.3594C89.8242 40.6446 90.0391 35.7813 87.8711 32.3828C86.4844 30.2344 83.8281 28.4961 80.918 27.8516C78.6914 27.3633 75.8203 27.4805 66.9336 28.418C57.793 29.375 54.4336 29.6875 54.3359 29.6094C54.3164 29.5703 55 28.5938 55.8789 27.4219C60.1562 21.6797 61.1914 16.2305 58.9258 11.4258C58.0273 9.53127 56.3867 7.79298 54.7266 6.9922C53.6133 6.44533 53.1836 6.34767 51.7578 6.28908C50.5078 6.25002 49.8437 6.32814 49.082 6.62111ZM53.2812 10.1758C54.9023 10.9766 56.3281 13.3985 56.5625 15.8008C56.7187 17.5 56.1914 19.961 55.2734 21.836C54.8242 22.7344 53.5156 24.7266 52.3437 26.2695C51.1719 27.8125 49.9023 29.6485 49.5117 30.3711C48.5156 32.1289 47.6172 34.7656 46.8945 37.9297C46.1133 41.4453 45.5078 42.6172 43.4766 44.6289C40.9375 47.1485 38.6523 48.0469 34.6484 48.0469C32.7539 48.0469 32.4414 48.086 32.0703 48.4375C31.1328 49.3164 31.3867 50.8008 32.5391 51.2891C33.418 51.6602 36.5625 51.6406 38.4375 51.25C42.4023 50.4492 45.8203 48.1055 48.125 44.6485C49.1211 43.125 49.7461 41.543 50.2148 39.2969C50.6836 36.9727 51.0547 35.5664 51.6016 34.2188L51.9922 33.2031H53.2031C54.7266 33.2031 59.043 32.793 67.1875 31.8946C75.1367 31.0156 79.5312 30.8985 81.2891 31.5625C84.3359 32.7344 85.8203 34.7656 85.8203 37.8125C85.8008 41.211 83.6914 42.7735 77.4023 44.0235C75.3711 44.4336 74.3164 44.5313 71.7383 44.5313C67.1875 44.5313 62.3633 45.0977 61.3281 45.7617C60.4687 46.2891 60.3125 47.5586 60.9961 48.3594C61.5625 49.0235 62.0898 49.043 64.6484 48.5352C66.25 48.2031 67.4023 48.1446 72.9492 48.1446C79.5508 48.1446 81.0742 48.2617 84.9219 49.043C89.2578 49.9219 92.1484 51.3867 93.0859 53.1641C93.457 53.8672 93.4375 55.7422 93.0469 57.0313C92.4414 59.043 91.2695 60.293 89.0039 61.3281C86.3867 62.5 83.5938 62.8906 77.8906 62.8906C73.9844 62.8906 73.75 62.8711 71.7578 62.3047C67.793 61.1914 62.3828 60.332 57.7148 60.0391C55.5664 59.9219 55.5469 59.9219 54.9219 60.4492C54.4336 60.8594 54.2969 61.1133 54.2969 61.6797C54.3164 63.0664 54.8828 63.3789 57.6172 63.5547C68.6914 64.2774 79.8047 67.7735 83.1836 71.6016C85.4102 74.1406 83.6914 76.9727 79.1797 78.2227C77.7148 78.6328 73.3398 78.8281 71.6797 78.5547C70.6445 78.3789 69.9805 78.086 68.0664 76.9336C65.0977 75.1367 61.8164 73.5547 57.6562 71.9336C53.8867 70.4688 53.1055 70.3516 52.4219 71.1524C51.8555 71.8164 51.7969 72.832 52.3047 73.3985C52.4805 73.6328 54.082 74.3555 55.9961 75.0977C62.8125 77.6953 67.6562 80.3516 69.9023 82.7149C72.2461 85.1953 72.9102 87.4024 71.6797 88.6524C70.7031 89.6094 69.1602 90.0977 66.6602 90.1953C61.8164 90.3711 55.8398 88.2617 48.8477 83.8867C43.1836 80.332 41.6602 79.7852 36.8555 79.4727C35.1562 79.375 33.1445 79.1602 32.3828 79.0039C26.1719 77.6953 20.0977 73.5352 17.832 69.043C17.1484 67.7149 16.8359 66.543 16.6211 64.6094C16.4258 62.8516 16.4648 62.1289 16.9141 59.2383C17.0312 58.4961 16.9727 58.3594 16.4453 57.8125C16.0156 57.3828 15.6641 57.2266 15.1953 57.2266C13.9062 57.2461 13.418 58.1055 13.1055 60.9766C12.8125 63.5352 13.1055 66.3477 13.8867 68.5547C14.668 70.7813 14.668 70.8985 13.8867 71.3672C11.875 72.5586 9.29687 71.1524 7.8125 68.0664C5.64453 63.5547 6.5625 49.4141 9.6875 39.1016C10.5273 36.3477 11.1133 35.1758 12.2461 33.9649C14.375 31.6797 17.5391 31.3281 19.2188 33.1836C19.5312 33.5352 19.5508 33.6914 19.3555 34.4531C18.8477 36.4844 19.375 37.6953 20.7422 37.6953C21.7578 37.6953 22.207 37.2461 22.6562 35.7813C23.7305 32.168 25.1367 31.0547 33.2031 27.3633C40.1953 24.1406 42.0898 22.3438 45.2344 15.9766C46.7578 12.8516 47.9297 11.2891 49.4141 10.3906C50.7031 9.62892 51.9727 9.5508 53.2812 10.1758Z"
/>
</svg>`;

const scissors = `<svg
class="scissors"
transform="rotate(90)"
xmlns="http://www.w3.org/2000/svg"
width="98"
height="98"
viewBox="0 0 100 100"
fill="none"
>
<path
  class="options-fill"
  d="M56.9922 14.082C59.5508 14.3164 64.3164 15.1758 67.168 15.9375C71.2891 17.0117 74.2187 18.2422 77.0508 20.0781C78.3984 20.9765 81.582 23.9648 82.3633 25.0781L82.7734 25.664L83.3984 25.1172C84.7461 23.9843 85.8984 23.5547 87.5977 23.5547C88.9453 23.5351 89.3359 23.6132 90.4492 24.1406C95.4492 26.5234 98.418 34.5898 99.2383 48.0468C99.7852 57.207 98.3398 64.0039 95.0977 67.4804C93.3984 69.2968 92.2266 69.8242 89.9414 69.8242C88.3984 69.8242 88.0469 69.7461 87.0508 69.2578C86.4258 68.9648 85.8984 68.75 85.8594 68.7695C85.8398 68.8086 85.3906 69.4922 84.8828 70.2734C80.4883 76.9531 71.6992 81.6406 63.5352 81.6406H61.2891L60.0781 82.5586C58.6914 83.5937 55.8984 84.9804 54.1992 85.4492C52.4219 85.9375 48.0664 86.0742 46.4844 85.664C42.832 84.7461 40.0781 82.4023 39.1211 79.375L38.8086 78.3789L37.2852 78.0468C34.3359 77.4219 31.4062 75.4883 30.0195 73.3008C28.2227 70.4687 28.2812 66.7187 30.1758 63.5937C30.5469 62.9687 30.8398 62.4218 30.8203 62.4023C30.7812 62.3828 29.4922 62.5 27.9297 62.6367C23.5742 63.0468 15.2734 63.0273 12.4023 62.6172C7.6953 61.9336 5.31249 61.0742 3.43749 59.3554C-0.390633 55.8593 -0.156258 49.082 3.90624 44.9414C6.30859 42.5 9.41405 41.5039 15.918 41.0547L17.8711 40.9179L16.7187 40.3711C13.7305 38.9843 10.8594 36.5429 9.70702 34.414C7.34374 30.039 9.35546 24.0625 14.0234 21.6211C19.2383 18.8672 28.5156 19.3164 39.0234 22.8125L41.2109 23.5547L41.9922 21.9726C44.8047 16.1328 49.9414 13.4375 56.9922 14.082ZM51.8555 17.8906C48.4766 18.7109 46.2695 20.7617 44.6484 24.5703C43.7695 26.6601 42.8125 28.0078 39.9609 31.1523C36.4258 35.039 36.3281 35.3711 38.3008 37.1875C41.2695 39.9414 45.4102 40.8203 48.5156 39.375C51.5234 37.9883 54.7266 34.1601 55.1758 31.3867C55.3711 30.3125 56.0352 29.6875 56.9922 29.6875C58.1836 29.6875 58.6523 30.332 58.7109 31.9922C58.75 33.6718 58.9258 34.4336 59.5117 35.6445C60.8789 38.3203 63.457 40.0781 66.8359 40.6054C67.7734 40.7617 68.1641 40.9375 68.4961 41.3086C69.1406 42.0312 69.082 42.8711 68.3398 43.5937C67.7734 44.1797 67.7148 44.1992 66.4258 44.0625C62.793 43.7304 59.0625 41.5234 57.1094 38.5156C56.7187 37.9101 56.3477 37.3633 56.3086 37.3242C56.2695 37.2656 56.0937 37.4414 55.918 37.7148C54.6484 39.5312 52.1094 41.582 49.9023 42.5976C48.9258 43.0468 48.6328 43.2422 48.8086 43.4179C49.1797 43.789 49.0625 44.8633 48.5547 45.4492L48.0664 45.9961L45.4687 45.957C44.043 45.9179 40.1367 45.6836 36.8164 45.4101C27.832 44.6875 24.7656 44.5312 20.0586 44.5312C13.9258 44.5312 10.3125 45.0195 8.08593 46.1328C5.52734 47.4023 3.78905 50.957 4.3164 53.8672C4.98046 57.4609 7.85155 58.8281 15.9375 59.3945C19.5898 59.6484 24.5508 59.4531 31.4062 58.7695L35.4297 58.3593L36.8945 57.4804C39.8633 55.664 43.6133 54.1406 47.3633 53.1836C50 52.539 54.3555 52.3437 56.3281 52.8125C58.2812 53.2812 59.8047 54.1601 61.1523 55.6445C63.6719 58.3984 64.4141 61.289 63.3984 64.3359L62.8711 65.8789L63.8477 66.875C66.3477 69.414 66.6797 72.9492 64.7852 76.7969L64.1406 78.125H64.8047C65.9766 78.125 69.3555 77.3437 71.1719 76.6406C72.1484 76.2695 73.6523 75.5664 74.5117 75.0586C82.3047 70.5859 85.9766 63.3984 84.375 55.7031C84.1406 54.4922 84.0625 53.7109 84.1797 53.4179C84.5898 52.3242 86.1719 51.9726 86.9922 52.8125C87.793 53.5937 88.1836 55.8593 88.1641 59.375C88.1641 61.7578 88.0664 62.6953 87.7539 63.8281C87.3242 65.4101 87.3437 65.4492 88.6133 66.0937C89.9609 66.7773 91.5234 66.3476 92.6953 64.9609C95.5859 61.582 96.5234 53.2226 95.1953 42.539C94.1992 34.4531 91.875 28.75 89.0039 27.3633C87.5781 26.6797 86.5039 26.914 85.4687 28.125C84.8242 28.9062 84.8242 29.1601 85.5664 31.2109C86.6602 34.3164 87.4805 38.7304 87.5 41.5429C87.5 42.6367 87.4609 42.7734 86.8945 43.2422C86.2109 43.8281 85.7617 43.8672 84.9609 43.457C84.2773 43.1054 84.0625 42.4414 83.8867 40.2343C83.5352 35.8008 82.3242 31.6015 80.5469 28.6718C77.1484 23.0859 71.2695 19.9609 60.8594 18.164C56.2695 17.3828 54.2187 17.3242 51.8555 17.8906ZM18.0469 23.8281C14.668 24.6875 12.8711 26.4648 12.3047 29.4531C11.2695 35.0195 19.5312 39.3945 35.1953 41.582C39.1602 42.1484 39.1406 42.1484 37.4219 41.0156C34.3555 38.9648 33.0859 36.7187 33.5938 34.2578C33.8867 32.8711 34.9023 31.3867 37.2852 28.8476C38.3594 27.6758 39.2578 26.6992 39.2578 26.6601C39.2578 26.5234 35.0977 25.2343 33.0078 24.7265C26.9531 23.2617 21.5234 22.9492 18.0469 23.8281ZM49.043 56.4453C46.3867 56.9922 44.4531 57.6562 41.6211 59.0039C37.1875 61.1328 34.0234 63.6328 32.9102 65.9179C31.7188 68.3398 32.1289 70.8008 33.9844 72.539C36.6797 75.0586 40.7227 75.4883 45.8984 73.8086C49.5898 72.5976 54.8633 69.375 57.6367 66.6211C59.4531 64.8047 60.1562 63.5937 60.3125 62.1093C60.4297 60.8984 60.1172 60.0195 59.082 58.6328C58.1641 57.3633 57.207 56.6797 55.8594 56.3281C54.4727 55.9375 51.2109 55.9961 49.043 56.4453ZM55.3906 72.8711C51.5039 75.4883 47.4023 77.3047 43.8867 77.9687C42.3437 78.2617 42.2656 78.457 43.2227 79.7265C43.9453 80.6836 45.3906 81.7187 46.4453 82.0508C46.8359 82.1679 48.1055 82.3242 49.2578 82.3633C51.875 82.4804 53.6719 82.1289 55.918 81.0156C59.1797 79.3945 62.1875 75.5468 62.4414 72.6562C62.5781 71.2304 62.1484 69.9609 61.2891 69.2383L60.7031 68.75L59.2187 70.039C58.3984 70.7422 56.6797 72.0312 55.3906 72.8711Z"
/>
</svg>`;

const question = `<svg
class="question-mark"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
version="1.1"
width="100"
height="100"
viewBox="0 0 256 256"
xml:space="preserve"
>
<defs></defs>
<g
  style="
    stroke: none;
    stroke-width: 0;
    stroke-dasharray: none;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 10;
    fill: none;
    fill-rule: nonzero;
    opacity: 1;
  "
  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
>
  <circle
    cx="45"
    cy="45"
    r="45"
    style="
      stroke: none;
      stroke-width: 1;
      stroke-dasharray: none;
      stroke-linecap: butt;
      stroke-linejoin: miter;
      stroke-miterlimit: 10;
      fill: rgb(66, 125, 244);
      fill-rule: nonzero;
      opacity: 1;
    "
    transform="  matrix(1 0 0 1 0 0) "
  />
  <path
    d="M 45 58.88 c -2.209 0 -4 -1.791 -4 -4 v -4.543 c 0 -1.101 0.454 -2.153 1.254 -2.908 l 8.083 -7.631 c 1.313 -1.377 2.035 -3.181 2.035 -5.087 v -0.302 c 0 -2.005 -0.791 -3.881 -2.228 -5.281 c -1.436 -1.399 -3.321 -2.14 -5.342 -2.089 c -3.957 0.102 -7.175 3.523 -7.175 7.626 c 0 2.209 -1.791 4 -4 4 s -4 -1.791 -4 -4 c 0 -8.402 6.715 -15.411 14.969 -15.623 c 4.183 -0.109 8.138 1.439 11.131 4.357 c 2.995 2.918 4.645 6.829 4.645 11.01 v 0.302 c 0 4.027 -1.546 7.834 -4.354 10.72 c -0.04 0.041 -0.08 0.081 -0.121 0.12 L 49 52.062 v 2.818 C 49 57.089 47.209 58.88 45 58.88 z"
    style="
      stroke: none;
      stroke-width: 1;
      stroke-dasharray: none;
      stroke-linecap: butt;
      stroke-linejoin: miter;
      stroke-miterlimit: 10;
      fill: rgb(255, 255, 255);
      fill-rule: nonzero;
      opacity: 1;
    "
    transform=" matrix(1 0 0 1 0 0) "
    stroke-linecap="round"
  />
  <path
    d="M 45 71.96 c -1.32 0 -2.61 -0.53 -3.54 -1.46 c -0.23 -0.23 -0.43 -0.49 -0.62 -0.76 c -0.18 -0.271 -0.33 -0.561 -0.46 -0.86 c -0.12 -0.311 -0.22 -0.62 -0.28 -0.94 c -0.07 -0.32 -0.1 -0.65 -0.1 -0.98 c 0 -0.32 0.03 -0.65 0.1 -0.97 c 0.06 -0.32 0.16 -0.641 0.28 -0.94 c 0.13 -0.3 0.28 -0.59 0.46 -0.86 c 0.19 -0.279 0.39 -0.529 0.62 -0.76 c 1.16 -1.16 2.89 -1.7 4.52 -1.37 c 0.32 0.07 0.629 0.16 0.93 0.29 c 0.3 0.12 0.59 0.28 0.859 0.46 c 0.28 0.181 0.53 0.391 0.761 0.62 c 0.239 0.23 0.439 0.48 0.63 0.76 c 0.18 0.271 0.33 0.561 0.46 0.86 c 0.12 0.3 0.22 0.62 0.279 0.94 C 49.97 66.31 50 66.64 50 66.96 c 0 0.33 -0.03 0.66 -0.101 0.979 c -0.06 0.32 -0.159 0.63 -0.279 0.94 c -0.13 0.3 -0.28 0.59 -0.46 0.86 c -0.19 0.27 -0.391 0.529 -0.63 0.76 c -0.23 0.229 -0.48 0.439 -0.761 0.62 c -0.27 0.18 -0.56 0.34 -0.859 0.46 c -0.301 0.13 -0.61 0.22 -0.93 0.279 C 45.65 71.93 45.33 71.96 45 71.96 z"
    style="
      stroke: none;
      stroke-width: 1;
      stroke-dasharray: none;
      stroke-linecap: butt;
      stroke-linejoin: miter;
      stroke-miterlimit: 10;
      fill: rgb(255, 255, 255);
      fill-rule: nonzero;
      opacity: 1;
    "
    transform=" matrix(1 0 0 1 0 0) "
    stroke-linecap="round"
  />
</g>
</svg>`;

// Global variables:
let userRoundsInput;
let currentRoundValue = 1;
let userScoreValue = 0;
let compScoreValue = 0;
let userChoicesEnabled = true;
const arrRockPaperScissors = ["rock", "paper", "scissors"];
const objRockPaperScissors = { rock: rock, paper: paper, scissors: scissors };

const body = document.querySelector("body");
const darkLightMode = document.querySelector(".mode");
const lightMode = document.querySelector(".light");
const darkMode = document.querySelector(".dark");
const roundsInput = document.querySelector(".rounds-input");
const playButton = document.querySelector(".play-button");
const currentRound = document.querySelector(".current-round");
const totalRounds = document.querySelector(".total-rounds");
const gameInit = document.querySelector(".rounds");
const mainGame = document.querySelector(".main-game");
const resetButton = document.querySelector(".reset-button");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
const userChoices = document.querySelectorAll(".choice");
const nextButton = document.querySelector(".next");
const userOptions = document.querySelector(".user-options");

////////////// FUNCTIONS //////////////
// Dark and Light mode:
darkLightMode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  lightMode.classList.toggle("hide");
  darkMode.classList.toggle("hide");
});

// Randomly generate computer choice:
const getComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);
  return arrRockPaperScissors[choice];
};

const updateChoice = function (player, playerChoice) {
  const choiceElement = document.getElementById(`${player}Choice`);
  choiceElement.innerHTML = objRockPaperScissors[playerChoice];
};

function resetGame() {
  gameInit.classList.remove("hide");
  mainGame.classList.add("hide");
  playButton.disabled = true;
  roundsInput.value = "";
  roundsInput.focus();
  userChoicesEnabled = true;
  document.getElementById("compChoice").innerHTML = question;
  document.querySelector(".vs-result-text").textContent = "VS.";
  document.getElementById("userChoice").classList.add("hide");
  userOptions.classList.remove("hide");
  userScoreValue = 0;
  compScoreValue = 0;
  currentRoundValue = 1;
}

function determineWinner(userChoice, compChoice) {
  const resultsDisplay = document.querySelector(".vs-result-text");
  if (userChoice === compChoice) {
    resultsDisplay.textContent = "DRAW!";
    return "draw";
  } else if (
    (userChoice === "rock" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "rock")
  ) {
    resultsDisplay.textContent = "YOU LOST!";
    return "lose";
  } else {
    resultsDisplay.textContent = "YOU WON!";
    return "win";
  }
}

function updateScores(result) {
  if (result === "win") {
    userScoreValue++;
  } else if (result === "lose") {
    compScoreValue++;
  }
  userScore.textContent = userScoreValue;
  compScore.textContent = compScoreValue;
}

function displayWinner() {
  let winner = "";
  if (userScoreValue > compScoreValue) {
    winner = "You win!";
  } else if (userScoreValue < compScoreValue) {
    winner = "Computer wins!";
  } else {
    winner = "It's a draw!";
  }

  alert(`Game Over!\n${winner}`);
  resetGame();
}

////////////// EVENT LISTENERS //////////////
document.addEventListener("DOMContentLoaded", function () {
  roundsInput.addEventListener("input", function () {
    // Check if the input field is empty
    if (roundsInput.value.trim() === "") {
      playButton.disabled = true; // Disable the button
    } else {
      playButton.disabled = false; // Enable the button
    }
  });

  // Initial check on page load
  if (roundsInput.value.trim() === "") {
    playButton.disabled = true;
  }

  roundsInput.focus();
});

// Allow button click with Enter key:
roundsInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !playButton.disabled) {
    playButton.click();
  }
});

// Let's Play button functionality:
playButton.addEventListener("click", function () {
  if (roundsInput.value.trim() !== "") {
    userRoundsInput = roundsInput.value;
    currentRound.textContent = currentRoundValue;
    totalRounds.textContent = userRoundsInput;
    compScore.textContent = compScoreValue;
    userScore.textContent = userScoreValue;
    // Hide the "rounds" section
    gameInit.classList.add("hide");

    // Show the "main-game" section
    mainGame.classList.remove("hide");
  }
});

// Reset button functionality:
resetButton.addEventListener("click", resetGame);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    resetGame();
  }
});

userChoices.forEach((choice) => {
  choice.addEventListener("click", function () {
    if (userChoicesEnabled) {
      userOptions.classList.add("hide");
      nextButton.classList.remove("hide");

      const userChoice = choice.id;
      document.getElementById("userChoice").classList.remove("hide");
      updateChoice("user", userChoice);

      // Determine the winner/loser and update scores
      const compChoice = getComputerChoice();
      updateChoice("comp", compChoice);
      const result = determineWinner(userChoice, compChoice);
      updateScores(result);
      console.log(currentRoundValue, userRoundsInput);
      // Check if rounds are complete:
      if (currentRoundValue < userRoundsInput) {
        currentRoundValue++;
        currentRound.textContent = currentRoundValue;
      } else if (currentRoundValue == userRoundsInput) {
        nextButton.classList.add("hide");
        userChoicesEnabled = false;
      }
    }
  });
});

// NEXT BUTTON FUNCTIONALITY:
nextButton.addEventListener("click", function () {
  userOptions.classList.remove("hide");
  nextButton.classList.add("hide");
  document.getElementById("compChoice").innerHTML = question;
  document.getElementById("userChoice").classList.add("hide");
  document.querySelector(".vs-result-text").textContent = "VS.";
});
