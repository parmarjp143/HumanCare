<?php

$data_base = mysqli_connect("localhost", "root", "", "human_care");

if (isset($_POST['sbtn'])) {
  $dpt_name = $_POST['Department_Name'];
  $doc_name = $_POST['Doctor_Name'];
  $old_new = $_POST['new_Old_Patient'];
  $p_name = $_POST['Patient_Name'];
  $p_email = $_POST['E-mail'];
  $p_no = $_POST['Number'];
  $p_date = $_POST['Date'];


  // echo $dpt_name,$doc_name,$old_new,$p_name,$p_email,$p_no,$p_data;

  $query = "INSERT INTO `hospital_data` ( `Department_Name`, `Doctor_Name`, `Old_&_New`, `Patient_Name`, `E-mail`, `Mobile_No`, `Date`) VALUES ('$dpt_name','$doc_name','$old_new','$p_name','$p_email','$p_no','$p_date')";

  if (mysqli_query($data_base, $query)) {

    header("Location:M-K-P.html");
  } else {

    echo "<script>alert('Somthing went wrong...')</script>";
  }
}
