

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <title>Print || Invoice</title>


    <style>


        .pull-right.moha_add_inv {
            text-align: left;
            margin-right: 20px ;
            margin-left: 20px ;
            margin-top: 10px;
        }

        body {
            background: #ddd;
        }

        .print {
            background: #fff;
            padding:28px;
            display:block;
        }
        .page-break {
            page-break-after: always;
            background-color: #fff;
            padding-bottom: 50px;
            padding-top: 15px;
            margin-bottom: 10px;
            width: 70%;
        }
        .invoice_header_left_section{
            text-align: left;
            width: 55% !important;
        }
        .invoice_header_right_section{
            text-align: center;
            width: 35% !important;
            display: flex;
            flex-direction: column;
        }
        @media print {
            #print {
                display: none;
            }
        }
        .btn-pr{
            text-align: right;
            display: block;
            position: fixed;
            right:0;
            top: 280px;
        }
        .btn-pr button{
            height: 50px;
        }


        .rotate-logo {
            position: fixed;
            left: 30%;
            top:20%;
            right: 0;
            bottom: 50%;
            width: 502px;
            font-size: 24px;
            opacity: 0.2;

        }

        .rotate-logo img{ width: 350px; }


        .customer_info_list {
          border:3px dashed #000 ;
          margin-top: 30px;
          margin-right: 100px;
          margin-left: 10px;
        }

        .customer_info_list li {
           list-style-type: square;
           padding: 5px 0px;
           text-align: left;
        }

        .current_date {
            margin-right: 170px;
        }

        .company_logo {
            width: 155px;
            height: 60px;
            margin-left: 20px;
            margin-top: 20px;
        }

    </style>

 @php
         $total_qty = 0 ;
         $sale_amount = 0 ;
         $sale_discount = 0 ;

         foreach ($sales as $sale) {
                $total_qty += $sale->sale_quantity ;
                $sale_amount += intval($sale->amount) ;
                $sale_discount += floatval($sale->discount) ;
         }



 @endphp

</head>
<body>
<div class="btn-pr">
    <button class="btn btn-success text-center print-button" onclick="allPrint()" id="print"><i class="fa fa-print"></i></button>
</div>


 <div class="container page-break">
        <div class="row justify-content-center break">
            <div class="invoice_header_left_section">
                    <ul class="customer_info_list">
                        <li> <strong> Name:  {{ $sales[0]->customer_name  }} </strong>  </li>
                        <li> <strong> Mobile: {{ $sales[0]->customer_phone }} </strong>  </li>
                        <li> <strong> Address: {{ $sales[0]->customer_address }}
                            </strong>
                        </li>
                        <li> <strong> Invoice No: {{ $sales[0]->invoice_no }} </strong> </li>
                    </ul>

            </div>
            <div class="invoice_header_right_section">
              <img class="company_logo" src="{{ asset('storage/'.$sellcenter->logo) }}" >
                <div class="pull-right moha_add_inv" >
                    <p> {{  $sellcenter->name  }} </p>
                    <p> {!! $sellcenter->address !!} </p>
                    <p class="current_date" style="margin-top: 5px;" >
                     <strong>  Date: <span style="bsale:1px solid #ddd">  <?php echo date("d/m/Y"); ?></span>   </strong> </p>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-11 col-md-11 col-lg-offset-1 col-md-offset-1">

                <table class="table table-bsaleed moha_tbl_inv" style="margin-top: 5px;">

                    <tbody>
                   @if ($sales[0]->courier)
                     <tr>
                        <td colspan="8" class="text-left" style="text-transform: capitalize;"><b> Courier  :   {{ $sales[0]->courier ?? "" }} </b>
                        </td>
                    </tr>
                   @endif
                   @if ($sales[0]->comment)
                   <tr>
                      <td colspan="8" class="text-left" style="text-transform: capitalize;"><b> Comment :   {{ $sales[0]->comment ?? "" }} </b>
                      </td>
                  </tr>
                 @endif
                    <tr>
                        <th  style="background-color: #04AA6D !important;" class="text-left">No</th>
                        <th  style="background-color: #04AA6D !important;" class="text-left">Product Details</th>
                        <th  style="background-color: #04AA6D !important;" class="text-left">Size</th>
                        <th  style="background-color: #04AA6D !important;" class="text-left">Color</th>
                        <th  style="background-color: #04AA6D !important;" class="text-left">Order No</th>
                        <th  style="background-color: #04AA6D !important;" class="text-right">Price</th>
                        <th  style="background-color: #04AA6D !important;" class="text-right">Qty</th>
                        <th  style="background-color: #04AA6D !important;" class="text-right">Total</th>
                    </tr>
                    @foreach($sales as $k=> $sale)

                        <tr>

                            <td class="text-center">{{$k+1}}</td>
                            <td class="text-center" style="text-transform: capitalize;">
                                {{$sale->product->name}} {{$sale->product->code}}
                            </td>
                            <td>
                                {{$sale->size ?? ''}}
                            </td>
                            <td>
                              {{$sale->color ?? ''}}
                            </td>
                            <td class="text-center">
                                {{$sale->id}}
                            </td>
                            <td class="text-center">
                                {{$sale->price}}
                            </td>
                            <td class="text-center"><span style="bsale: 1px solid #ddd;"><b style="font-size: 16px;padding:5px 5px 5px 5px;"> {{$sale->sale_quantity}}</b></span></td>
                            <td class="text-right">{{ $sale->sale_quantity * $sale->price }} Tk</td>
                        </tr>
                    @endforeach



                    <tr>
                        <td colspan="6" class="text-right"> Total Quantity and Shipping Charge </td>
                        <td> <strong> = {{ $total_qty }} </strong> </td>
                        <td class="text-right"><span style="font-size: 13px;">{{$sales[0]->shipping_cost}} Tk</span></td>
                    </tr>
                    <tr>
                        <td colspan="7" class="text-right">Total:</td>
                        <td class="text-right">
                         <span style="font-weight:bold;font-size:13px;">
                            {{ intval($sales[0]->shipping_cost) + intval($sale_amount) }} TK</span>
                        </td>
                    </tr>
                        <tr>
                            <td colspan="7" class="text-right">Discount:</td>
                            <td class="text-right"> {{ intval($sale_discount )}} Tk</td>
                        </tr>
                         <tr>
                            <td colspan="7" class="text-right">Paid:</td>
                            <td class="text-right"> {{ intval($sales[0]->paid)  }} Tk</td>
                        </tr>
                         <tr>
                            <td colspan="7" class="text-right">Amount Due:</td>
                            <td class="text-right">{{ ( intval($sale_amount) +  intval($sales[0]->shipping_cost) ) - ( intval($sales[0]->paid) + intval($sale_discount) )   }} Tk</td>
                        </tr>

                    </tbody>
                </table>
                     <p style="margin-top:-8px;"> <b><i> **No replace will be accepted after 7 days</i></b></p>

            </div>
        </div>



    </div>

 

<script>
    function allPrint() {
        window.print();
    };

    window.addEventListener('DOMContentLoaded', (event) => {
      window.print();
    });

</script>

</body>
</html>

