// LESSON 22 NEVER TYPE
// jest to kolejny typ, jaki może zwrócić funkcja, tak jak void
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
;
generateError('An error occured!', 500);
