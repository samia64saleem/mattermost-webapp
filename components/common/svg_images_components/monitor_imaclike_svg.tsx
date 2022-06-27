// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type SvgProps = {
    width?: number;
    height?: number;
};

const MonitorImacLikeSVG = (props: SvgProps) => (
    <svg
        width={props.width?.toString() || '150'}
        height={props.height?.toString() || '160'}
        viewBox='0 0 150 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <path
            d='M144.783 17.2976C144.783 12.6825 140.156 8.06738 135.529 8.06738H15.2276C10.6006 8.06738 5.97363 12.6825 5.97363 17.2976V105.037H144.783V17.2976Z'
            fill='#2D3039'
        />
        <path
            d='M5.97363 105.036V114.266C5.97363 118.881 10.6006 123.496 15.2276 123.496H135.529C140.156 123.496 144.783 118.881 144.783 114.266V105.036H5.97363Z'
            fill='#DDDFE4'
        />
        <path
            d='M56.8702 128.095C56.8702 137.325 47.6162 137.325 38.3975 137.325H112.429C103.175 137.325 93.9563 137.325 93.9563 128.095V123.462H56.9406L56.8702 128.095Z'
            fill='#C6C9D2'
        />
        <path
            d='M135.529 17.333H15.2278V95.7893H135.529V17.333Z'
            fill='white'
        />
        <path
            d='M75.3781 111.801C75.8357 111.801 76.283 111.936 76.6635 112.19C77.0439 112.443 77.3404 112.804 77.5155 113.225C77.6906 113.647 77.7364 114.111 77.6471 114.558C77.5579 115.006 77.3376 115.417 77.014 115.74C76.6905 116.063 76.2782 116.283 75.8295 116.372C75.3807 116.461 74.9155 116.415 74.4928 116.24C74.0701 116.066 73.7088 115.77 73.4546 115.39C73.2004 115.011 73.0647 114.565 73.0647 114.108C73.0647 113.496 73.3084 112.909 73.7423 112.477C74.1761 112.044 74.7646 111.801 75.3781 111.801Z'
            fill='#BABEC9'
        />
        <path
            d='M112.394 137.325H38.3623V146.555H112.394V137.325Z'
            fill='#A4A9B7'
        />
        <path
            d='M52.9387 24.4707H28.9387C26.7296 24.4707 24.9387 26.2616 24.9387 28.4707V44.4707C24.9387 46.6798 26.7296 48.4707 28.9387 48.4707H52.9387C55.1479 48.4707 56.9387 46.6798 56.9387 44.4707V28.4707C56.9387 26.2616 55.1479 24.4707 52.9387 24.4707Z'
            fill='#3D3C40'
            fillOpacity='0.24'
        />
        <path
            d='M40.9387 28.4707C39.3565 28.4707 37.8098 28.9399 36.4942 29.8189C35.1786 30.698 34.1532 31.9474 33.5477 33.4092C32.9422 34.871 32.7838 36.4796 33.0924 38.0314C33.4011 39.5833 34.163 41.0087 35.2819 42.1275C36.4007 43.2464 37.8261 44.0083 39.378 44.317C40.9298 44.6257 42.5384 44.4672 44.0002 43.8617C45.462 43.2562 46.7114 42.2309 47.5905 40.9153C48.4695 39.5997 48.9387 38.0529 48.9387 36.4707C48.9325 34.3509 48.0877 32.3196 46.5887 30.8207C45.0898 29.3218 43.0585 28.4769 40.9387 28.4707ZM40.9387 30.8707C41.4134 30.8707 41.8774 31.0115 42.2721 31.2752C42.6668 31.5389 42.9744 31.9137 43.156 32.3523C43.3377 32.7908 43.3852 33.2734 43.2926 33.7389C43.2 34.2045 42.9714 34.6321 42.6358 34.9678C42.3001 35.3034 41.8725 35.532 41.4069 35.6246C40.9414 35.7172 40.4588 35.6697 40.0203 35.488C39.5817 35.3064 39.2069 34.9987 38.9432 34.6041C38.6795 34.2094 38.5387 33.7454 38.5387 33.2707C38.5408 32.6348 38.7944 32.0256 39.244 31.576C39.6936 31.1264 40.3029 30.8728 40.9387 30.8707V30.8707ZM40.9387 42.4245C39.9906 42.4202 39.0579 42.1847 38.2215 41.7383C37.385 41.2919 36.6701 40.6482 36.1387 39.863C36.1772 38.263 39.3387 37.3822 40.9387 37.3822C42.5387 37.3822 45.7003 38.263 45.7387 39.863C45.2067 40.6476 44.4917 41.2909 43.6554 41.7372C42.8191 42.1835 41.8867 42.4194 40.9387 42.4245Z'
            fill='white'
        />
        <path
            d='M87.9387 24.4707H63.9387C61.7296 24.4707 59.9387 26.2616 59.9387 28.4707V44.4707C59.9387 46.6798 61.7296 48.4707 63.9387 48.4707H87.9387C90.1479 48.4707 91.9387 46.6798 91.9387 44.4707V28.4707C91.9387 26.2616 90.1479 24.4707 87.9387 24.4707Z'
            fill='#3D3C40'
            fillOpacity='0.24'
        />
        <path
            d='M75.9387 28.4707C74.3565 28.4707 72.8098 28.9399 71.4942 29.8189C70.1786 30.698 69.1532 31.9474 68.5477 33.4092C67.9422 34.871 67.7838 36.4796 68.0924 38.0314C68.4011 39.5833 69.163 41.0087 70.2819 42.1275C71.4007 43.2464 72.8261 44.0083 74.378 44.317C75.9298 44.6257 77.5384 44.4672 79.0002 43.8617C80.462 43.2562 81.7114 42.2309 82.5905 40.9153C83.4695 39.5997 83.9387 38.0529 83.9387 36.4707C83.9325 34.3509 83.0877 32.3196 81.5887 30.8207C80.0898 29.3218 78.0585 28.4769 75.9387 28.4707ZM75.9387 30.8707C76.4134 30.8707 76.8774 31.0115 77.2721 31.2752C77.6668 31.5389 77.9744 31.9137 78.156 32.3523C78.3377 32.7908 78.3852 33.2734 78.2926 33.7389C78.2 34.2045 77.9714 34.6321 77.6358 34.9678C77.3001 35.3034 76.8725 35.532 76.4069 35.6246C75.9414 35.7172 75.4588 35.6697 75.0203 35.488C74.5817 35.3064 74.2069 34.9987 73.9432 34.6041C73.6795 34.2094 73.5387 33.7454 73.5387 33.2707C73.5408 32.6348 73.7944 32.0256 74.244 31.576C74.6936 31.1264 75.3029 30.8728 75.9387 30.8707V30.8707ZM75.9387 42.4245C74.9906 42.4202 74.0579 42.1847 73.2215 41.7383C72.385 41.2919 71.6701 40.6482 71.1387 39.863C71.1772 38.263 74.3387 37.3822 75.9387 37.3822C77.5387 37.3822 80.7003 38.263 80.7387 39.863C80.2067 40.6476 79.4917 41.2909 78.6554 41.7372C77.8191 42.1835 76.8867 42.4194 75.9387 42.4245Z'
            fill='white'
        />
        <path
            d='M122.939 24.4707H98.9387C96.7296 24.4707 94.9387 26.2616 94.9387 28.4707V44.4707C94.9387 46.6798 96.7296 48.4707 98.9387 48.4707H122.939C125.148 48.4707 126.939 46.6798 126.939 44.4707V28.4707C126.939 26.2616 125.148 24.4707 122.939 24.4707Z'
            fill='#166DE0'
        />
        <path
            d='M110.939 28.4707C109.356 28.4707 107.81 28.9399 106.494 29.8189C105.179 30.698 104.153 31.9474 103.548 33.4092C102.942 34.871 102.784 36.4796 103.092 38.0314C103.401 39.5833 104.163 41.0087 105.282 42.1275C106.401 43.2464 107.826 44.0083 109.378 44.317C110.93 44.6257 112.538 44.4672 114 43.8617C115.462 43.2562 116.711 42.2309 117.59 40.9153C118.47 39.5997 118.939 38.0529 118.939 36.4707C118.933 34.3509 118.088 32.3196 116.589 30.8207C115.09 29.3218 113.059 28.4769 110.939 28.4707ZM110.939 30.8707C111.413 30.8707 111.877 31.0115 112.272 31.2752C112.667 31.5389 112.974 31.9137 113.156 32.3523C113.338 32.7908 113.385 33.2734 113.293 33.7389C113.2 34.2045 112.971 34.6321 112.636 34.9678C112.3 35.3034 111.873 35.532 111.407 35.6246C110.941 35.7172 110.459 35.6697 110.02 35.488C109.582 35.3064 109.207 34.9987 108.943 34.6041C108.679 34.2094 108.539 33.7454 108.539 33.2707C108.541 32.6348 108.794 32.0256 109.244 31.576C109.694 31.1264 110.303 30.8728 110.939 30.8707V30.8707ZM110.939 42.4245C109.991 42.4202 109.058 42.1847 108.221 41.7383C107.385 41.2919 106.67 40.6482 106.139 39.863C106.177 38.263 109.339 37.3822 110.939 37.3822C112.539 37.3822 115.7 38.263 115.739 39.863C115.207 40.6476 114.492 41.2909 113.655 41.7372C112.819 42.1835 111.887 42.4194 110.939 42.4245Z'
            fill='white'
        />
        <path
            d='M52.9387 64.4707H28.9387C26.7296 64.4707 24.9387 66.2616 24.9387 68.4707V84.4707C24.9387 86.6798 26.7296 88.4707 28.9387 88.4707H52.9387C55.1479 88.4707 56.9387 86.6798 56.9387 84.4707V68.4707C56.9387 66.2616 55.1479 64.4707 52.9387 64.4707Z'
            fill='#166DE0'
        />
        <path
            d='M40.9387 68.4707C39.3565 68.4707 37.8098 68.9399 36.4942 69.8189C35.1786 70.698 34.1532 71.9474 33.5477 73.4092C32.9422 74.871 32.7838 76.4796 33.0924 78.0314C33.4011 79.5833 34.163 81.0087 35.2819 82.1275C36.4007 83.2464 37.8261 84.0083 39.378 84.317C40.9298 84.6257 42.5384 84.4672 44.0002 83.8617C45.462 83.2562 46.7114 82.2309 47.5905 80.9153C48.4695 79.5997 48.9387 78.0529 48.9387 76.4707C48.9325 74.3509 48.0877 72.3196 46.5887 70.8207C45.0898 69.3218 43.0585 68.4769 40.9387 68.4707ZM40.9387 70.8707C41.4134 70.8707 41.8774 71.0115 42.2721 71.2752C42.6668 71.5389 42.9744 71.9137 43.156 72.3523C43.3377 72.7908 43.3852 73.2734 43.2926 73.7389C43.2 74.2045 42.9714 74.6321 42.6358 74.9678C42.3001 75.3034 41.8725 75.532 41.4069 75.6246C40.9414 75.7172 40.4588 75.6697 40.0203 75.488C39.5817 75.3064 39.2069 74.9987 38.9432 74.6041C38.6795 74.2094 38.5387 73.7454 38.5387 73.2707C38.5408 72.6348 38.7944 72.0256 39.244 71.576C39.6936 71.1264 40.3029 70.8728 40.9387 70.8707V70.8707ZM40.9387 82.4245C39.9906 82.4202 39.0579 82.1847 38.2215 81.7383C37.385 81.2919 36.6701 80.6482 36.1387 79.863C36.1772 78.263 39.3387 77.3822 40.9387 77.3822C42.5387 77.3822 45.7003 78.263 45.7387 79.863C45.2067 80.6476 44.4917 81.2909 43.6554 81.7372C42.8191 82.1835 41.8867 82.4194 40.9387 82.4245Z'
            fill='white'
        />
        <path
            d='M86.9387 64.4707H62.9387C60.7296 64.4707 58.9387 66.2616 58.9387 68.4707V84.4707C58.9387 86.6798 60.7296 88.4707 62.9387 88.4707H86.9387C89.1479 88.4707 90.9387 86.6798 90.9387 84.4707V68.4707C90.9387 66.2616 89.1479 64.4707 86.9387 64.4707Z'
            fill='#166DE0'
        />
        <path
            d='M74.9387 68.4707C73.3565 68.4707 71.8098 68.9399 70.4942 69.8189C69.1786 70.698 68.1532 71.9474 67.5477 73.4092C66.9422 74.871 66.7838 76.4796 67.0924 78.0314C67.4011 79.5833 68.163 81.0087 69.2819 82.1275C70.4007 83.2464 71.8261 84.0083 73.378 84.317C74.9298 84.6257 76.5384 84.4672 78.0002 83.8617C79.462 83.2562 80.7114 82.2309 81.5905 80.9153C82.4695 79.5997 82.9387 78.0529 82.9387 76.4707C82.9325 74.3509 82.0877 72.3196 80.5887 70.8207C79.0898 69.3218 77.0585 68.4769 74.9387 68.4707ZM74.9387 70.8707C75.4134 70.8707 75.8774 71.0115 76.2721 71.2752C76.6668 71.5389 76.9744 71.9137 77.156 72.3523C77.3377 72.7908 77.3852 73.2734 77.2926 73.7389C77.2 74.2045 76.9714 74.6321 76.6358 74.9678C76.3001 75.3034 75.8725 75.532 75.4069 75.6246C74.9414 75.7172 74.4588 75.6697 74.0203 75.488C73.5817 75.3064 73.2069 74.9987 72.9432 74.6041C72.6795 74.2094 72.5387 73.7454 72.5387 73.2707C72.5408 72.6348 72.7944 72.0256 73.244 71.576C73.6936 71.1264 74.3029 70.8728 74.9387 70.8707V70.8707ZM74.9387 82.4245C73.9906 82.4202 73.0579 82.1847 72.2215 81.7383C71.385 81.2919 70.6701 80.6482 70.1387 79.863C70.1772 78.263 73.3387 77.3822 74.9387 77.3822C76.5387 77.3822 79.7003 78.263 79.7387 79.863C79.2067 80.6476 78.4917 81.2909 77.6554 81.7372C76.8191 82.1835 75.8867 82.4194 74.9387 82.4245Z'
            fill='white'
        />
        <path
            d='M120.939 64.4707H96.9387C94.7296 64.4707 92.9387 66.2616 92.9387 68.4707V84.4707C92.9387 86.6798 94.7296 88.4707 96.9387 88.4707H120.939C123.148 88.4707 124.939 86.6798 124.939 84.4707V68.4707C124.939 66.2616 123.148 64.4707 120.939 64.4707Z'
            fill='#3D3C40'
            fillOpacity='0.24'
        />
        <path
            d='M108.939 68.4707C107.356 68.4707 105.81 68.9399 104.494 69.8189C103.179 70.698 102.153 71.9474 101.548 73.4092C100.942 74.871 100.784 76.4796 101.092 78.0314C101.401 79.5833 102.163 81.0087 103.282 82.1275C104.401 83.2464 105.826 84.0083 107.378 84.317C108.93 84.6257 110.538 84.4672 112 83.8617C113.462 83.2562 114.711 82.2309 115.59 80.9153C116.47 79.5997 116.939 78.0529 116.939 76.4707C116.933 74.3509 116.088 72.3196 114.589 70.8207C113.09 69.3218 111.059 68.4769 108.939 68.4707ZM108.939 70.8707C109.413 70.8707 109.877 71.0115 110.272 71.2752C110.667 71.5389 110.974 71.9137 111.156 72.3523C111.338 72.7908 111.385 73.2734 111.293 73.7389C111.2 74.2045 110.971 74.6321 110.636 74.9678C110.3 75.3034 109.873 75.532 109.407 75.6246C108.941 75.7172 108.459 75.6697 108.02 75.488C107.582 75.3064 107.207 74.9987 106.943 74.6041C106.679 74.2094 106.539 73.7454 106.539 73.2707C106.541 72.6348 106.794 72.0256 107.244 71.576C107.694 71.1264 108.303 70.8728 108.939 70.8707V70.8707ZM108.939 82.4245C107.991 82.4202 107.058 82.1847 106.221 81.7383C105.385 81.2919 104.67 80.6482 104.139 79.863C104.177 78.263 107.339 77.3822 108.939 77.3822C110.539 77.3822 113.7 78.263 113.739 79.863C113.207 80.6476 112.492 81.2909 111.655 81.7372C110.819 82.1835 109.887 82.4194 108.939 82.4245Z'
            fill='white'
        />
    </svg>
);

export default MonitorImacLikeSVG;