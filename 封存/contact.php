<?php
if (isset($_POST['submit'])) {

  // 获取表单数据
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  // 设置收件人地址和邮件主题
  $to = 'ragic.cyc@gmail.com';
  $subject = '来自网站的咨询：' . $name;

  // 设置邮件正文
  $body = "姓名： $name \n\n电子邮件地址： $email \n\n电话号码： $phone \n\n留言内容： $message";

  // 设置邮件头部信息
  $headers = "From: " . $name . " <" . $email . ">\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // 发送邮件
  mail($to, $subject, $body, $headers);

  // 显示提交成功消息
  echo "<p>您的信息已成功提交。谢谢！</p>";

} else {

  // 显示表单
  echo '<form method="post">
    <label for="name">您的姓名</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="email">电子邮件</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="phone">电话号码</label>
    <input type="tel" id="phone" name="phone" required>
    <br>
    <label for="message">咨询留言</label>
    <textarea id="message" name="message" required></textarea>
    <br>
    <button type="submit" name="submit">提交</button>
  </form>';

}
?>
