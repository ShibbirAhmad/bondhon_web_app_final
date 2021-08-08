
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

      * {
            margin: 0;
            padding: 0;

        }

        .address {
            margin-top: 50px;
            margin-bottom: 20px;
            line-height: 25px;
            text-align: center;

        }

        .logo {
            font-size: 32px;
            font-weight: bolder;

        }

        .container{
                      position:absolute;
                      width: 100%;
                      height:auto ;

                  }
         .table_container{

             text-align: center;
             margin:5px;
         }



           th, td {
            border-bottom: 1px solid #ddd;
            padding: 3px;
            }

           th {
            height: 40px;
            width: 105px;
           }

          td {
             text-align: center;
            }
    </style>
</head>
<body>
     <div class="container">

        <div class="address">
      <?php
         $setting=App\Models\GeneralSetting::latest()->first();
         ?>
          <p class="logo">  {{ $setting->title }}   </p>
          <p> {!! $setting->invoice_address_details !!} </p>
        </div>

          <div class="table_container">
                          <p><strong> {{ $loaner->name }}</strong></p>
                  <table class="table  table-striped">

                        <tr>
                            <th scope="col">Serial No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Paid Amount </th>
                        </tr>

                        <tbody>

                        <?php $n=1 ;?>
                        @foreach ($loaner->paid_amount as $key=> $loan)
                        <tr >
                            <td> {{ $key + 1 }}  </td>
                            <td> {{ $loan->date }}  </td>
                            <td> {{ $loan->amount }}   </td>

                         </tr>
                         @if($n % 25 == 0)
                         <div style="page-break-before:always;"></div>
                        @endif
                        <?php $n++ ?>
                        @endforeach

                        <tr>
                            <td colspan="1"></td>
                            <td > Total Paid </td>
                            <td >
                               <strong> =  {{ $total_loan_paid }}</strong>
                            </td>

                        </tr>

                    </tbody>
                </table>

          </div>
     </div>

   </body>
</html>