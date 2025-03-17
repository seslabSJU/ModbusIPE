export const slaveConfig = {
    port: "/dev/ttyXRUSB0",
    baudRate: 115200,
    parity: "none",
    dataBits: 8,
    stopBits: 1
};

export const cseUrl = 'http://192.168.0.127:3000/TinyIoT';

export const resourceConfig = {
    AE_NAME: 'solar_controller',
    AE_ORIGIN: 'CAdmin',
    API: 'NsorlarController',
    RR: true
}
