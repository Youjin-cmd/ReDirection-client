<p align="center">
  <img width="400" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/d0a05e94-f003-4938-92bf-eeace7a9eead">
</p>

<br>

<p align="center">
  Re-Direction은 가로 영상의 피사체의 움직임을 분석해서 세로 영상으로 바꾸어주는 웹 애플리케이션입니다.
</p>

<br>

<p align="center">
  <a href="https://app.re-direction.xyz/">Deployed website</a>
  <span> | </span>
  <a href="https://github.com/Youjin-cmd/ReDirection-client">Frontend Repository</a>
  <span> | </span>
  <a href="https://github.com/Youjin-cmd/ReDirection-server">Backend Repository</a>
</p>

<br>

# 📖 CONTENTS

- [🔍 Preview](#-preview)
- [🛠 Tech Stacks](#-tech-stacks)
- [💥 Motivation](#-motivation)
- [🕹️ Features](#-features)
- [🏔 Challenges](#-challenges)
  - [1. 어떻게 자바스크립트로 모션 분석을 할 수 있을까?](#1-어떻게-자바스크립트로-모션-분석을-할-수-있을까)
  - [2. 자바스크립트 환경에서 비디오와 이미지 다루기](#2-자바스크립트-환경에서-비디오와-이미지-다루기)
    - [2-1. 기술검증](#2-1-기술-검증)
    - [2-2. 분석시 추출하는 프레임을 최대한 가볍게](#2-2-분석시-추출하는-프레임을-최대한-가볍게)
    - [2-3 모션 분석부터 결과 반환까지](#2-3-모션-분석부터-결과-반환까지)
  - [3. 결과영상을 최적화하여 유저만족도 높이기](#3-결과영상을-최적화하여-유저만족도-높이기)
    - [3-1. 모션이 없는 구간(0)의 처리](#3-1-모션이-없는-구간0의-처리)
    - [3-2. 불규칙적으로 튀는 좌표를 눌러주기](#3-2-불규칙적으로-튀는-좌표를-눌러주기)
    - [3-3. 좌표 배열을 부드러운 선형으로 만들어주기](#3-3-좌표-배열을-부드러운-선형으로-만들어주기)
    - [3-4. 유저의 주관을 반영하는 단계를 추가](#3-4-유저의-주관을-반영하는-단계를-추가)
  - [4. 글귀와 스티커를 어떻게 영상에 삽입할까?](#4-글귀와-스티커를-어떻게-영상에-삽입할까)
    - [4-1. 간편한 꾸미기 인터페이스 제공하기](#4-1-간편한-꾸미기-인터페이스-제공하기)
    - [4-2. 요청과 정확히 일치하는 결과물 반환](#4-2-요청과-정확히-일치하는-결과물-반환)
  - [5. 구조를 최적화하여 유지보수성을 향상시키기](#5-구조를-최적화하여-유지보수성을-향상시키기)
- [🗓 Schedule](#-schedule)
- [📒프로젝트 소감](#-프로젝트-소감)

<br>

# **🔍 Preview**
<p align="center">
  <img src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/0f326a2e-e53e-45c7-ad8a-bf56d9d75538">
  <img src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/c379f80e-2581-45a7-8181-592f17afb5ba">
</p>

<br>

# **🛠 Tech Stacks**

### Client

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Server

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Multer](https://img.shields.io/badge/Multer-white?style=for-the-badge&logoColor=black) ![FFmpeg](https://img.shields.io/badge/FFmpeg-000?style=for-the-badge&logoColor=white) ![Sharp](https://img.shields.io/badge/Sharp-%234ea94b.svg?style=for-the-badge&logoColor=white)

### Test

![React Dom Testing](https://img.shields.io/badge/react%20dom%20testing-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vitest](https://img.shields.io/badge/Vitest-%2344A833.svg?style=for-the-badge&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

### Deployment

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) ![AWS Elastic Beanstalk](https://img.shields.io/badge/AWS%20Elastic%20Beanstalk-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

<br>

# **💥 Motivation**

요즈음 트렌드인 인스타그램의 스토리나 틱톡에 가로영상을 올리려고 할 때면 그 중에 가장 맘에 드는 세로구간을 선택하면서 난감했던 적이 있을 것입니다. 춤을 추는 친구가 좌우로 크게 움직이거나, 결혼식에서 입장하는 부부가 우측 끝에서 좌측 끝으로 이동을 한다면, 전문 영상편집 프로그램이 제공하는 모션트랙킹을 이용하지 않는 이상 적당한 세로구간을 고르기가 어렵습니다.<br>
위와 같은 경험을 바탕으로, 일반인들도 손쉽게 가로영상의 하이라이트 구간만을 골라서 세로영상으로 변환할 수 있는 툴을 만들 수는 없을지 고민하게 되었습니다. 이번에 진행한 프로젝트가 제공하는 기능은 영상 트랜드가 가로에서 세로로 바뀌어가는 현재에 많은 분들이 필요로 하지 않을까 합니다. 또한 AI 없이 자바스크립트만으로 모션을 분석해본다는 점에서 도전욕구를 불러일으켰고, 이전에 영상과 애니메이션을 제작한 경험이 있었기 때문에 코드를 통해 비디오를 직접 변환하는 법을 이번 기회를 통해 배워본다는 점에서 강한 동기부여가 되었습니다.

<br>

# **🕹️ Features**

### 동영상 업로드

<p align="center">
  <img width="600px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/e62df3ee-2d6c-48eb-8717-a91b238f51c3" />
</p>

- 사용자는 Upload your video버튼을 클릭해서 동영상을 고르거나 드래그앤드랍을 하여 동영상 업로드를 할 수 있습니다.
  - 최대 파일 사이즈는 100MB이며, 동영상 포맷만 업로드 가능합니다. 조건에 부합하지 않는 파일이 업로드 될 경우, 관련 안내문구가 쓰여진 페이지로 이동됩니다.

### 분석 영역과 예민도 설정

<p align="center">
  <img width="600px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/ba3759c0-89b8-48a7-b4ad-8b98f6b5f847" />
</p>

- 사용자는 모션 히트맵을 통해 모션분석 결과를 확인하고 원하는 구간과 예민도를 컨펌할 수 있습니다.
  - 모션트랙킹을 적용하고싶은 구간을 설정해주면 이 구간내의 모션만 추적하여 세로영상이 작성됩니다.
  - 모션트래킹 예민도를 sensitive, medium, modest 중에서 취향에 따라 설정해줍니다.
    - sensitive: 모션을 빠르게 추적하나 다소 산만할 수 있습니다.
    - modest: 모션을 천천히 추적하나 정확도가 떨어질 수 있습니다.

### 결과물 꾸미기

<p align="center">
  <img width="600px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/5410c93c-0ae5-4cb7-b2cc-56683d98dba3" />
</p>

- 사용자는 결과 영상을 확인할 수 있습니다. 문구와 스티커를 선택하여 영상을 꾸미고 컨펌할 수 있습니다. 꾸미기를 원치않으면 그대로 컨펌버튼을 클릭합니다.
  - 우측상단의 스피커버튼을 클릭하여 소리를 켜거나 끌 수 있습니다.
  - 문구는 총 8가지 폰트가 준비되어 있으며 드래그앤드랍을 통해 자유롭게 배치할 수 있습니다. 현재 영어만 지원하고 있습니다.
    - 색상을 변경할 수 있습니다. (빨강, 하양, 파랑, 검정)
    - 배경색을 변경할 수 있습니다. (하양, 검정, 투명)
  - 스티커는 총 9가지 디자인이 준비되어 있으며 드래그앤드랍을 통해 자유롭게 배치할 수 있습니다.

### 최종 결과물 반환받기

<p align="center">
  <img width="600px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/6cb130db-cb69-408b-a156-c3c433f8b0ef" />
</p>

- 최종결과물이 자동으로 다운로드되어 download 폴더에 저장됩니다. 사용자는 .mp4 확장자의 결과물을 확인할 수 있습니다.
  - 좌측 상단의 로고를 클릭하거나 try with another video?를 클릭하면 메인페이지로 돌아갑니다.

<br>

# **🏔 Challenges**
## 1. 어떻게 자바스크립트로 모션 분석을 할 수 있을까?

3차원의 공간안에서 사물이 이동하는 것을 우리는 “움직임”이라고 합니다. 그러나 화면 속 영상매체에서 “움직임”은 어떻게 정의 될 수 있을까요?
<p align="center">
  <img width="500px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/fb1d77e0-1a28-4f81-a947-2a524c407005">
</p>

영상는 많은 수의 이미지가 연속적으로 빠르게 전환하여 화면이 움직이는 것처럼 보이게 만드는 디지털매체입니다. 이러한 영상을 이루는 연속된 이미지를 프레임이라고 합니다. 현재 보고 있는 프레임과 다음에 올 프레임, 그 사이에 “격렬한 색상 변화”가 있다고 할 때, 화면은 단순히 표시하는 색깔을 바꾼것에 불과하지만 사람은 이를 보고 “움직임”이라고 인식합니다.

저는 이 개념에 착안해서, 색상의 변화가 얼마만큼의 면적에서, 얼마나 격렬하게 일어났는지를 분석하면 자바스크립트로도 충분히 모션분석이 가능하지 않을까 생각했습니다.

<br>

## 2. 자바스크립트 환경에서 비디오와 이미지 다루기

### 2-1. 기술 검증

바닐라 자바스크립트만으로는 멀티미디어 파일을 다루는 방법을 알 수 없어, 어떻게 프로젝트를 시작해야할지 막막했습니다.

따라서 조사를 진행하여 오픈소스 멀티미디어 프레임워크인 FFmpeg의 존재를 알게 되었습니다. FFmpeg는 npm 패키지가 아니기 때문에, 커맨드를 통해 상호작용하기 위해서 Node.js 내장모듈인 `child_process`을 활용했습니다.
또한 동영상파일의 메타 데이터나 가로 세로 크기 같은 규격에 접근하기 위해서는 FFmpeg가 제공하는 도구인 FFprobe를 이용해야했습니다.

다음으로, FFmpeg로 추출한 프레임 이미지의 픽셀을 분석하기 위해서는 어떤 기술이 필요할지 조사를 한 결과, Canvas API의 `getImageData()`와 블렌딩을 위한 속성인 `globalCompositeOperation`을 이용한 예시가 많았습니다. 그러나 제 애플리케이션의 경우 무거운 멀티미디어 파일을 다루는 특징이 있다보니 클라이언트와의 일련의 통신에서 수백, 수천개에 달하는 이미지를 주고 받는 일은 피하고 싶었습니다. 또한 영상을 분해 => 처리 => 재조립하여 결과를 반환하기까지의 과정에서 유저에게 이미지를 렌더하여 보여주거나 상호작용하는 과정이 없는 점도 고려하여, Canvas API는 선택지에서 제외하였습니다.

서버사이드인 Node.js에서 이용가능한 이미지 프로세싱 라이브러리에는 어떤 것들이 있을 지 조사해보자, 대표적으로 Jimp와 Sharp가 있는 것을 알게 되었습니다.
두 라이브러리의 장단점을 비교해보았으나 C로 개발된 Sharp라이브러리의 성능 벤치마킹 점수가 앞도적으로 높아, 수많은 비디오 프레임을 빠르게 처리해야하는 프로젝트에 딱 맞겠다고 판단하여 채택하였습니다. 또한 Sharp라이브러리에는 Canvas API와 마찬가지로 블렌딩을 위한 composite 내장메서드도 존재하였기에 Canvas API를 기반으로 짠 모션분석의 과정을 그대로 실현시킬 수 있으리라 생각했습니다.

composite는 두 이미지를 합성할 때 사용하는 메서드로, 옵션으로 "difference"를 주어 두 이미지 사이에 달라진 부분이 강조되도록 할 수 있습니다.

<p align="center">
  <img width="400px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/7d94d991-84b3-43fc-ac34-93cb02b2e161"><br>
  🔺 difference옵션을 적용한 합성이미지
</p>

<br>

움직임이 거의 없는 픽셀은 어두운 색깔을 띄고 움직임이 많은 픽셀은 밝은 색깔을 띄는 것을 볼 수 있습니다. RGB는 픽셀이 가진 삼원색의 속성으로써 색상이 밝을 수록 RGB의 합계 스코어가 높습니다. 즉 위 이미지의 모든 픽셀의 RGB 스코어 분석을 하면 변화가 격렬했던 부분을 가려낼 수 있게 됩니다.

<br>

### 2-2. 분석시 추출하는 프레임을 최대한 가볍게

영상 미디어를 편집하는 작업은 컴퓨터의 성능을 한계까지 끌어내서 쓴다고 해도 과언이 아닐 정도로 많은 리소스를 요하는 무거운 작업입니다. 리디렉션은 웹 기반의 컨버터로써 누구나 캐쥬얼하게 이용 가능해야하는 만큼 퍼포먼스의 성능향상은 아주 중요한 과제 중 하나였습니다. 퍼포먼스가 좋지 못하면 변환 결과를 오래 동안 기다려야하므로 유저경험에도 좋지 않을 뿐만 아니라, 서버에도 부하가 심할 것이기 때문이었습니다.
<p align="center">
  <img width="400px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/344c1aa5-4390-4bdd-8b4d-1dc9e4776ef1">
</p>

예를 들어 25fps의 1280 x 720 영상이 있다고 할 때, 고작 15초 남짓되는 영상에서 추출되는 프레임은 384개입니다. 결과적으로 모션분석 시에 자바스크립트 로직이 순환해야하는 픽셀의 개수는 총 8847360000개로 어마어마한 분량이 됩니다. <br>
그러나 피사체의 속도가 총알수준이 아닌 이상, 25분의 1초의 모션을 하나 하나 분석할 필요는 없으며, 이미지의 퀄리티가 낮더라도 큰 영역에 걸친 색상 차이를 분석하는데는 충분한 정보를 얻을 수 있습니다.

<p align="center">
  <img width="400px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/ce3651fd-62ea-4a9a-a21f-e45ddf6ae63c">
</p>

저는 따라서 초당 13매로 추출할 프레임의 개수를 절반가량으로 줄이고, 크기 또한 100 x 56으로 대폭 축소하였습니다. <br>
이미지 형식 또한 PNG-24보다 비트수가 적어 한결 가벼운 PNG-8를 채택하였습니다.

<p align="center">
  <img width="500px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/ff9b3ec2-612e-4323-9782-1868d10ece96">
</p>

위의 두 방법을 적용해보고 분석용 프레임 폴더의 총 용량을 비교해보니, 15초 영상 기준으로 823KB의 폴더가 생성되었습니다. 기존의 141.1MB와 비교하여 드라마틱하게 가벼워짐에 따라 결과적으로 퍼포먼스도 크게 향상되는 모습을 확인할 수 있었습니다.

<br>

### 2-3. 모션 분석부터 결과 반환까지

<p align="center">
  <img width="800px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/d140af47-2b20-4762-9c0d-4a2abf96445e" />
</p>

FFmpeg와 Sharp를 이용한 모션분석의 과정을 그림으로 표현하면 위와 같습니다.
상세히 하나하나 짚어보겠습니다.

1. **비디오 업로드** <br> 유저가 클라이언트에서 비디오를 업로드하면 multer를 통하여 백엔드로 전송되게 됩니다.

2. **분석용 저퀄리티 프레임 추출** <br> 먼저 FFmpeg를 이용하여 프레임간의 비교를 위해서 영상을 이루는 프레임들을 추출합니다. <br> 오직 분석용으로 쓰일 예정이므로 저퀄리티의 프레임들을 초당 13매만 생성해줍니다.

3. **모션 히트맵 영상 생성** <br> Sharp의 composite 메서드를 통해 두 이미지를 합성하여 변화한 구간만을 도출합니다.

4. **분석할 영역 컨펌** <br> 유저는 반환된 모션히트맵 프리뷰 영상을 토대로 모션 분석을 요청할 영역과 예민도를 컨펌합니다.

5. **고퀄리티 프레임 추출** <br> FFmpeg를 이용하여 원본영상에서 고퀄리티의 프레임을 초당 25매로 추출해줍니다.

6. **영역 내부에서 모션 분석, 최적화** <br> 이미지의 픽셀을 순회하며 스코어가 강한 세로줄의 위치를 배열에 담습니다. <br> 배열에 담을지 여부를 가리는 기준점인 Threshold는 실험을 통해 얻은 적절한 숫자로 설정되어 있으며 픽셀이 단순 노이즈인지 모션에 해당하는지를 가려줍니다. <br> "모션분석 배열"의 중앙을 구한 후, 크롭의 기준점이 되는 좌측 최상단의 좌표값을 구하여 "좌표 배열"에 넣어줍니다.<br> 안정적인 결과물을 얻을 수 있도록 배열내부의 좌표값을 최적화해줍니다.

7. **프레임을 크롭하여 세로영상 생성** <br> 좌표배열을 기반으로 하여 Sharp를 이용해 프레임들을 크롭해줍니다. <br> 크롭이 완료된 프레임들을 FFmpeg를 이용해 비디오로 합쳐줍니다. <br> 이때에 미리 준비해놓았던 오디오 파일과 영상을 함께 먹싱해줍니다.

8. **꾸미기 컨펌** <br> 유저는 모션분석 결과물을 확인하고 영상을 꾸밀 수 있습니다. 꾸미기를 하지않고 그대로 컨펌하면 10번째 단계로 건너뜁니다.

9. **꾸미기 반영하여 최종영상 생성** <br> FFmpeg의 필터를 이용하여 유저가 제출한 디자인대로 영상을 편집하고 최종결과물을 생성합니다.

10. **최종영상 반환** <br> S3에 업로드된 결과물의 url을 이용하여 사용자가 결과물을 다운로드 받을 수 있게 합니다.

<br>

## 3. 결과영상을 최적화하여 유저만족도 높이기
<p align="center">
  <img width="500px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/93073146-600b-4ed3-b5d3-352badb8c1a1">
</p>

모션분석의 결과물이 담긴 좌표배열은 단순히 모션 스코어가 높았던 부위의 중앙을 추적한 결과물이라, 좌표들이 서로간에 연결되어있지 않거나 끊어지는 문제가 있었습니다. 이대로 최적화 없이 프레임을 처리하는데 사용하게 되면, 사람이 관람하기에는 매우 불편하고 산만한 결과물이 반환되어 해결할 방법을 고민하게 되었습니다.

중구난방인 숫자의 분포를 부드럽게 이어주기 위해서, 아래의 세가지의 함수를 거쳐 배열 내부의 좌표들을 최적화해주었습니다.

<p align="center">
  <img width="500px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/1fe81a50-4d2d-49b7-afab-edd0b5ab5819">
  <img width="500px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/74ce54e8-e03d-4465-8804-d4008682d589">
</p>

이를 위해서 곳곳에서 선형보간법 “linear interpolation”이라 일컫어지는 두 지점 사이의 중간 값을 구하는 개념이 활용되었습니다.

### 3-1. 모션이 없는 구간(0)의 처리

<p align="center">
  <img width="800px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/239844a1-a76c-4d46-8314-3741949fbd51">
</p>

댄스 커버 영상, 혹은 꼬리를 계속 흔드는 강아지 영상이 아닌 이상, 모션이 잦아드는 구간은 어떤 영상이든 일반적으로 여러군데에 존재합니다. 따라서 배열 안에 “모션없음” 즉, 0이 섞여있는 문제가 자연스럽게 발생하였습니다.
이를 해결하기 위하여 모션이 끝난 구간과 다시 시작되는 구간 사이의 매끄럽게 이어주는 함수를 구현하였습니다. 예를 들어, 순환 중 모션이 끝나서 0이 발견되게 되면 모션이 다시 시작되기 전까지의 gap을 세고, increment를 (다음 값 - 이전 값 / gap) 더하여 조금씩 상승하는 값들을 하나 하나 push해 줍니다.
결과적으로, 연속적으로 0이 등장하는 구간이 유효한 값들로 채울 수 있었습니다.

### 3-2. 불규칙적으로 튀는 좌표를 눌러주기

<p align="center">
  <img width="800px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/f694c61f-60a0-4b8c-a7b8-1dbdaac7e727">
</p>

  - 업로드되는 영상에는 노이즈가 있거나, 화면의 가장자리에 등장하는 행인이 있을 수 있습니다. [… , 10, 5, 10 , …], [… , 35, 10, 36 , …] 과 같이 두 숫자들의 사이에 급격하게 차이가 나는 수가 들어있을 경우, 가운데 숫자를 중간값으로 덮어씌우는 함수를 구축하였습니다. 이로 인해 급격히 카메라가 엉뚱한 곳으로 이동하는 부적절한 부분을 많이 줄일 수 있었습니다.

### 3-3. 좌표 배열을 부드러운 선형으로 만들어주기

<p align="center">
  <img width="300px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/0d588b3d-a492-46a5-b979-e64fa262ae26">
</p>

- 유저가 선택한 n을 분기점 삼아, 분기점들 사이를 선형으로 눌러주는 로직입니다. <br> 민감도의 강, 약을 조절하는 슬라이더 인터페이스를 통해 유저가 감도를 설정하면 어느정도 빠르기와 민감도로 카메라가 모션을 추적할지가 결정됩니다. n의 숫자가 낮으면 분기점 사이가 좁아져 추적이 정확하지만 다소 산만하며, n의 숫자가 높으면 분기점 사이가 멀어져 부드럽지만 덜 예민한 추적정도를 가지게 됩니다.

<p align="center">
  <img width="800px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/93f978c0-b4f6-420f-9e1c-19cf8371d200">
</p>

- 슬라이더는 sensitive, medium, modest의 세가지 선택지를 제공하며, 사전에 실험을 통해 상식적인 결과물을 도출하는 숫자들로 할당하였습니다. <br> 결과적으로 배열 내부의 숫자가 부드러운 path를 이루게 되어 마치 카메라가 피사체를 쫓아 이동하는 듯한 안정적인 결과물을 반환할 수 있었습니다.

### 3-4. 유저의 주관을 반영하는 단계를 추가

프로젝트를 준비하며 사용자경험을 미리 분석하여 느낀 점은, 유저가 카메라를 가로로 들고자 할때는 대부분 피사체가 둘 이상이거나 좌우로 늘어선 케이스란 것이였습니다. 그렇기에 둘 이상의 피사체가 가로영상에 분포되어있을 경우, 단순하게 모션이 일어난 구역의 중앙을 분석하는 현 로직으로는 유저가 만족스러워할만한 결과를 얻기에 한계가 있었습니다.

<p align="center">
 <img width="500px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/1c1a2a39-6e2d-4025-80b0-990cf34cd2b6">
</p>

고민 끝에 사용자에게 희망하는 구역을 컨펌받는 단계를 도입하기로 하였습니다. 비디오 위에 영역 셀렉터 인터페이스를 구현하고 드래그앤드랍을 통해 자유자재로 조절이 가능하도록 했습니다. 유저가 원하는 영역을 지정한 뒤 제출할 경우, 영역의 내부에서만 모션분석 순회로직이 동작하도록 하였습니다. 추가로, 유저가 지정한 영역이 결과 영상의 가로길이와 거의 동일한 때에는 (3픽셀 차이 내) 모션분석을 희망하지 않는 것으로 보고, 선택한 영역을 크롭한 결과영상을 반환하도록 구성하였습니다.

Re-Direction은 얼굴이나 사물인식과같은 AI기술을 쓰지 않는 프로젝트이기 때문에 피사체가 많거나 배경이 심하게 요동치는 경우 모션분석에 한계를 보이는 케이스도 있습니다. 그러나 위에 나열한 많은 최적화와 개선책을 통해서 보다 안정적인 결과물을 반환하고 이를 받아본 사용자의 만족도를 크게 높일 수 있었습니다.

## 4. 글귀와 스티커를 어떻게 영상에 삽입할까?

### 4-1. 간편한 꾸미기 인터페이스 제공하기

<p align="center">
  <img width="600px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/5ac38e09-7452-4c39-8570-386a5779c2d1">
</p>

각종 이벤트와 속성에 대해 공부할 기회를 가져보기 위하여 꾸미기 기능의 핵심인 드래그앤드랍을 라이브러리없이 직접 구현해보기로 했습니다.

#### 1. 구현을 위한 재료

제 드래그앤드랍 로직에 쓰인 재료들은 아래와 같습니다.
1. `mouseDown`: 마우스 왼쪽버튼을 누르는 이벤트: 타겟의 좌표 갱신을 시작합니다.
2. `mouseMove`: 마우스를 움직이는 이벤트: 타겟의 좌표를 실시간으로 갱신합니다.
3. `mouseUp`: 마우스 왼쪽버튼에서 손가락을 떼는 이벤트: 타겟의 좌표 갱신을 종료합니다.
4. `useRef`: 스크린 상의 비디오좌표를 파악해주어 왼쪽상단 꼭지점이 윈도우 리사이즈에 상관없이 항상 0, 0으로 초기화될 수 있도록 해줍니다. <br> 이로써 드래그제한구역이 어떠한 경우라도 비디오와 정확히 일치하게 됩니다.
5. `ClientX`, `ClientY`: 타겟의 위치가 마우스커서 위치를 따라 갱신될 수 있도록 스크린상 커서의 실시간 위치를 파악합니다.

#### 2. DnD 영역 제한

여기에 제한된 영역을 타겟이 벗어나지 못하도록 각 조건에 따른 얼리리턴 로직을 붙이자 안정적인 드래그앤드랍 기능이 완성되었습니다.

<p align="center">
  <img width="600px" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/46ff7d87-bf18-4d56-9cc3-e005ac5e3bd1">
</p>

상하좌우변과 사방의 꼭지점을 벗어나는 조건들의 경우 각종 숫자와 부등호들로 표현되기 때문에 주석의 도움 없이는 가독성이 매우 떨어지는 문제가 있었습니다. <br>
따라서 위 이미지처럼 각 예외상황들을 변수화하고 각종 매직넘버들을 모두 상수처리하는 리팩터링을 수행하여 가독성을 향상시켰습니다.

#### 3. 타겟의 스케일에 반응하도록 발전시키기

꾸미기 요소의 경우 사이즈가 종류별로 제각각이며 글귀 input 또한 내용에 따라 크기가 동적으로 변합니다.
따라서 타겟의 크기가 커지거나 작아지더라도 반응형으로 영역제한을 해줄 수 있도록 개선시켜주었습니다.
이를 위해서 useRef를 이용하여 해당 요소의 DOM노드 데이터를 읽어들여 활용하였습니다.

- 스티커 컴포넌트 예시

```javascript
  const stickerRef = useRef<HTMLImageElement>(null);

  function setElementScale() {
    if (stickerRef.current) {
      setTargetElementScale(stickerRef.current.width, stickerRef.current.height);
    }
  }

  // ...

  <img
    // 각종 어트리뷰트
    ref={stickerRef}
  />
```

이어서 유저가 요소를 드래그하기 위해 클릭했을 시 setElementScale 함수가 작동되어, targertElementScale에 타겟 스티커의 크기 데이터가 담기도록 했습니다. 이 데이터는 이어서 드래그앤드랍을 담당하는 함수내부에서 드래그 영역제한 해주는데 사용되게 됩니다.

### 4-2. 요청과 정확히 일치하는 결과물 반환

클라이언트단에서 영상꾸미기와 관련한 인터페이스가 모두 완성되자, 다음으로 유저가 컨펌한 디자인을 실제로 어떻게 영상에 삽입할 것인가라는 문제에 봉착했습니다. 반환되어 오는 결과물이 유저가 설정하고 제출한 모습과 오차 없이 정확하게 일치해야했기 때문이었습니다.

먼저, 다양한 조사와 시행착오를 통해서 다음과 같은 내용을 확인했습니다.

- ffmpeg의 필터 커맨드를 이용하면 글자나 이미지를 영상의 원하는 위치에 삽입하는 것이 가능하다.
- ffmpeg의 “drawtext” 커맨드에는 배경색, 개행, 가운데 정렬등이 적용되지 않는다. 글씨의 배경색의 경우, 그 역할을 대신 해줄 “사각형”을 drawbox를 이용해 별도로 만들어주어야 한다.
- 영상에 삽입할 폰트와 이미지 파일은 local path에서 불러와야하며, S3 url을 직접 사용할 수 없다.
- 이미지 삽입기능에서 .svg확장자는 지원하지 않는다.

위를 참고하여, 클라이언트 측에서 FFmpeg의 커맨드의 파라미터가 될 데이터를 간추려 서버에 전송하였습니다.
또한, .ttf파일과 .png파일을 모두 S3에 업로드하고, edit 요청이 들어올 경우 FFmpeg의 작업을 들어가기 전에 필요한 파일들을 내려받도록 했습니다.

작업을 위한 재료들의 다운로드가 모두 완료되면, 글귀와 스티커의 유무에 따라 FFmpeg 커맨드에 Argument를 추가해줍니다.

```javascript
"-i",
path.join(SAVING_DIR_RESULT, "result_video.mp4"),
// 0번째 미디어: 비디오
"-i",
downloadedFiles.stickerPath,
// 1번째 미디어: 스티커
"-filter_complex",
// 필터적용 커맨드. 이하는 파라미터.
`[1:v]scale=150:-1[scaled_sticker];[0:v][scaled_sticker]overlay=x=${stickerX}:y=${stickerY},drawbox=x=${fontX}:y=${fontY - 7}:w=${fontWidth}:h=35:color=${fontBg}:t=fill,drawtext=text=${fontContent}:x=${fontX}+${fontWidth}/2-text_w/2:y=${fontY}:fontsize=30:fontcolor=${fontColor}:fontfile=${downloadedFiles.typefacePath}`,
// [1:v]... 1번째 인덱스 요소인 스티커의 스케일을 조절
// [0:v]... 0번째 인덱스 요소인 비디오 위에 스티커를 오버레이, drawbox= 글귀 뒤쪽에 위치할 박스를 작성, drawtext= 글귀를 작성.
"-y",
// 덮어쓰기 허용
path.join(SAVING_DIR_EDITED_RESULT, "edited_video.mp4"),
// 저장할 경로를 지정 & 결과파일 이름설정
```
🔺 스티커와 글귀를 동시 적용할 경우 아규먼트 예시

- HTML의 input태그의 속성에서 지원하는 “transparent”의 경우, FFmpeg가 알아듣는 속성명은 아니므로, 분기를 설정해주어 “transparent”가 아닐 경우에만 drawbox를 생성하는 로직을 커멘드 배열에 push하도록 했습니다.
- 또한 가운데 정렬의 개념도 FFmpeg는 알지 못하므로 FFmpeg 커맨드 문법을 이용하여 계산식을 작성해야만 했습니다.

HTML관련 속성값들을 FFmpeg가 지원하는 형식에 걸맞게 바꿔주는 작업은 마치 서로 다른 언어로 쓰인 글의 번역작업과 흡사하다고 느꼈습니다.
긴 시간동안의 시행착오 끝에 올바른 커맨드문법을 적용하여 결과적으로 클라이언트단에서 유저가 설정한 모습이 똑같이 영상에 삽입된 것을 보았을 때는 크나큰 보람을 느낄 수 있었습니다.

<br>

## 5. 구조를 최적화하여 유지보수성을 향상시키기

초기에는 꾸미기 요소의 항목이 폰트와 스티커, 단 두가지임에 따라 각종 state 및 로직들의 짜임새와 두 요소 사이의 결합도가 매우 높은 상태였습니다.

그러나 시간이 지남에 따라 GIF나 그리기, 필터 등 다른 새로운 꾸미기 요소가 추가하게 될 때, 수많은 곳에서 수정이 일어나야 한다면 개방폐쇄원칙에 어긋나고 중복코드가 증가할 것이 예상되었습니다. 따라서 확장성과 유지보수성이 더 나은 설계는 없을까 고민한 결과 다음과 같이 구조를 변경하게 되었습니다.

### 요소 별 state가 생기는 구조를 리팩터링

첫번째로, 각 요소 별로 셋업해주었던 드래그 유무, 좌표 등의 스테이트를 제거하고 공용스테이트가 요소의 종류나 개수와 관계없이 동작하도록 구조를 리팩터링해주었습니다.

- 변경 전

<img width="450" alt="スクリーンショット 2023-12-07 22 21 53" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/d61de142-d45a-4065-8744-40b290417cd4">
<br>
🔺 기존 구조를 도식으로 표현. 중복 코드가 요소의 개수별에 비례하여 발생.

<br>

- 변경 후

<img width="450" alt="スクリーンショット 2023-12-07 22 22 11" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/52a31422-ef8d-4200-b77a-f9878e28c338">

이로써 각 요소의 isDragging이 true/false로 토글하는 것이 아니라 타겟명이 isDragging에 직접 담기도록 해, 항목의 개수와 상관없이 한 쌍의 state와 세터만으로 DnD가 작동하도록 하였습니다.

### 비슷한 관심사의 데이터를 한 곳에 모으기

두번째로, 각 요소에 관련된 데이터가 여러 state들에 흩어져있기에 한 객체에 깔끔하게 모았습니다. 그리고 유저가 어떤 요소를 선택하면 관련 객체가 selectedDecos객체에 동적으로 추가 / 제거되도록 리팩터링하였습니다.

- 변경 전

<img width="450" alt="スクリーンショット 2023-12-07 22 22 20" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/ddd472ac-51c9-4af6-845a-f6f377af1fc1">
<br>
🔺 기존 구조를 도식으로 표현. 새 꾸미기 요소가 추가되야할 경우 관련 state를 별도로 새로 작성하고 selectedDecos내부에 name과 url 프로퍼티를 추가하는 등 복잡한 수정이 필요하게 됩니다.

- 변경 후

<img width="450" alt="スクリーンショット 2023-12-07 22 22 28" src="https://github.com/Youjin-cmd/ReDirection-client/assets/83858724/b2c9b74c-9a74-435f-9e3e-d894e509d654">

새 요소가 추가되더라도 selectedDecos의 내부구조를 변경할 필요가 없으며, 선택된 요소의 데이터 객체가 담긴 selectedDecos가 그대로 백엔드 요청시에 페이로드에 사용됩니다. 이 업데이트를 통해 api리퀘스트 시 보내는 객체 내부를 수정해야하는 번거로움이 해소되었습니다.

### 요소 별 분기 로직 제거

마지막으로, 디자인 요소 별 좌표 데이터가 각각의 coord state가 아닌, selectedDecos의 하위객체 내부에 저장되도록 변경됨에 따라 handleMouseMove에서도 개선이 이루어졌습니다.

- 기존 코드

```javascript
 function handleMouseMove(event) {
    switch (isDragging) {
      case "sticker":
        moveDecoElement(videoRect, event, setStickerCoord, targetElementScale);
        break;
      case "font":
        moveDecoElement(videoRect, event, setFontCoord, targetElementScale);
        break;
    }
  }
```
기존에는 요소별로 좌표 state가 따로 존재했기에 setStickerCoord, setFontCoord과 같은 알맞은 setter를 인자로 전달하기 위해 swtich문을 활용했었습니다.

- 개선 후

```javascript
  function handleMouseMove(event) {
    moveDecoElement(isDragging, videoRect, event, setCoord, targetElementScale);
  }
```

타겟정보가 담긴 isDragging을 인자로 받아, 해당 타겟의 객체 내부 좌표를 변경해줍니다.
따라서 새 요소의 추가에 맞추어 switch문에 케이스를 추가하는 등의 번거로움이 없어지게 되었습니다.

구조를 최적화하는 리팩터링을 진행하면서 무작정 구현에 돌입하기 이전에 디자인패턴에 기초지식을 토대로 적절한 초기 계획을 수립하는 것이 얼마나 중요한지를 명확히 깨달았습니다.
앞으로도 효율적인 패턴에 대한 공부와 실습을 계속하여 제품의 확장성을 높이고, 미래의 디자인 변경에 대비할 수 있는 힘을 길러나가고자 합니다.

# **🗓 Schedule**

- 프로젝트 기간: 2023년 8월 7일 - 9월 5일

- 1주차
  - 아이디어 수집, 선정
  - 기술 스택 결정 및 검증
  - ESLint, Prettier 설정
  - KANBAN 작성

- 2주차
  - 리액트 및 Node.js/Express 환경 세팅
  - RESTful API 작성
  - 메인화면 구현
  - 로딩 구현
  - 영역지정 로직 구현

- 3주차
  - 영상 분석과정 구현
  - 영상 크롭 및 반환과정 구현
  - 영상 꾸미기 기능 구현

- 4주차
  - 배포
  - 테스트코드 작성
  - README 작성

<br>

# **📒 프로젝트 소감**

영상관련 작업을 하다보면 컴퓨터가 뜨거워지고 팬이 빠르게 돌아갑니다. 이렇듯 온갖 CPU와 그래픽카드를 고생시키며 무겁고 복잡한 작업들을 수행하는 영상 편집툴들이 실제 어떤 처리를 하고 있는지는 대략적으로만 알고있었을 뿐 내부 로직들에 대해서는 자세히 알아본 적이 없었습니다. 이번 개인프로젝트에서 영상 변환툴 구현에 실제 도전해보면서 각 픽셀의 RGB속성에 접근하거나 편집하는 법, 그리고 업계의 표준이라 불리울정도로 중요한 영상편집 프레임워크를 다뤄볼 수 있게 되어 무척 뜻 깊었습니다.

소프트웨어를 개발할 때는 수 많은 로직들을 독립적이고 명확하게 짜고, 이들을 모아 하나의 기능으로 발전시킨다라고 이론적으로 배웠으나 실제 개발경험이 없이는 이를 제대로 이해하기 어려웠습니다. 따라서 이번 프로젝트에서 프론트엔드와 백엔드를 둘다 스스로 구축하고, 유저의 클릭부터 결과 반환까지의 일련의 과정을 직접 구현해본 것은 아주 소중한 경험이었습니다. 부족함으로 인해 초기 디자인했던 API를 중간에 수정하거나 프론트엔드단의 로직을 백엔드로 대거 이사시키는 등 이런저런 시행착오도 있었습니다. 특히 API의 수정은 대단한 리소스를 요구하기 때문에 초기 디자인이 얼마나 중요하고 신중해야하는지 절실히 깨달았습니다. 그러나 기능개발과 구조의 수정같은 과제들이 처음에는 무시무시하게 느껴지더라도 당황하지 않고 침착하게 단계를 밟아가면, 소프트웨어가 상상한대로 작동해주면서 보람과 환희가 안겨준다는 것을 배웠습니다.

앞으로도 많은 소프트웨어 개발경험을 통하여 지식형태로 알고 있던 것을 직접 실천하고 스스로 체화하는 기회를 가지고 싶습니다. 작은 산을 넘는 경험을 한 후에 더 큰 산에 도전할 수 있듯이, 프로젝트의 수준과 더불어 저 또한 함께 성장해 나가고 싶습니다.