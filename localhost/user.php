<?php


  include 'db_connect.php';
    $id=$_GET['doctor'];
    $query_user = mysqli_query($connect, "SELECT id_doctor, id_patient, name_patient, email_patient, sex_patient, address_patient, no_tel_patient, profile_pict_pat  FROM doctors JOIN patients_doctors JOIN patients WHERE id_doct=id_doctor AND id_pat=id_patient && id_doct='$id'");

    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
      if($result['profile_pict_pat'] ===""){
      }
      else
        $result['profile_pict_pat'] = "http://akusehat.pe.hu".$result['profile_pict_pat'];
        
        $result_set[]=$result;
    }
$data =array(
    'message' => "Get Data User Succses",
    'data' => $result_set,
    'status' => "200"
);

echo json_encode($data);
?>
