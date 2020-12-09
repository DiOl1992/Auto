<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['tel']); 
$code = trim($_POST['code']); 
$file= trim($_POST['file']);
$fromMail = 'diolppua@diol.pp.ua'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'dianagerasimova1992@gmail.com'; //Ваша почта
$subject = 'Форма обратной связи diol.pp.ua'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта \nИмя:$name\nТелефон:$phone\nКод фильтра:$code\nФото:$file"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>