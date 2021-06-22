
        <div class="row">
          <h1 style="margin-left: 15px" v-if="$can('manage accounts')">Accounts</h1>
          <div class="col-lg-3">
            <div class="custom-box">
              <div class="custom-box-body">
                <h4>
                  In Cash: <strong>{{ parseInt(balance.today_credit_cash) }}</strong>
                </h4>
                <h4>
                  In Bkash(personal):
                  <strong>{{ parseInt(balance.today_credit_bkash_personal) }}</strong>
                </h4>
                <h4>
                  In Bkash(merchant):
                  <strong>{{ parseInt(balance.today_credit_bkash_merchant) }}</strong>
                </h4>
                <h4>
                  In Bank: <strong>{{ parseInt(balance.today_credit_bank) }}</strong>
                </h4>

                <h4>
                  Total: <strong>{{ parseInt(balance.today_credit) }}</strong>
                </h4>
              </div>

              <div class="custom-box-footer">
                <h3 class="text-center text-uppercase">today credit</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="custom-box">
              <div class="custom-box-body">
                <h4>
                  In Cash: <strong>{{ parseInt(balance.today_debitt_cash) }}</strong>
                </h4>
                <h4>
                  In Bkash(personal):
                  <strong>{{ parseInt(balance.today_debit_bkash_personal) }}</strong>
                </h4>
                <h4>
                  In Bkash(merchant):
                  <strong>{{ parseInt(balance.today_debit_bkash_merchant) }}</strong>
                </h4>
                <h4>
                  In Bank: <strong>{{ parseInt(balance.today_debit_bank) }}</strong>
                </h4>

                <h4>
                  Total: <strong>{{ parseInt(balance.today_debit) }}</strong>
                </h4>
              </div>

              <div class="custom-box-footer">
                <h3 class="text-center text-uppercase">today debit</h3>
              </div>
            </div>
          </div>


          <div class="col-lg-3">
            <div class="custom-box">
              <div class="custom-box-body">
                <h4>
                  In Cash:
                  <strong>{{
                    parseInt(balance.total_credit_cash) -
                    parseInt(balance.total_debitt_cash)
                  }}</strong>
                </h4>
                <h4>
                  In Bkash(personal):
                  <strong>{{
                    parseInt(balance.total_credit_bkash_personal) -
                    parseInt(balance.total_debit_bkash_personal)
                  }}</strong>
                </h4>
                <h4>
                  In Bkash(merchant):
                  <strong>{{
                    parseInt(balance.total_credit_bkash_merchant) -
                    parseInt(balance.total_debit_bkash_merchant)
                  }}</strong>
                </h4>
                <h4>
                  In Bank:
                  <strong>{{
                    parseInt(balance.total_credit_bank) -
                    parseInt(balance.total_debit_bank)
                  }}</strong>
                </h4>

                <h4>
                  Total:
                  <strong>{{
                    parseInt(balance.total_credit) - parseInt(balance.total_debit)
                  }}</strong>
                </h4>
              </div>

              <div class="custom-box-footer">
                <h3 class="text-center text-uppercase">total balance</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="$can('manage accounts')">

          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-12">
                <h1 style="text-align: right; margin-top: 30px">Analysis</h1>

                <div class="custom-box">
                  <div class="custom-box-body">
                    <ul class="analysis-item">
                      <li
                        :class="{ active: analysisshow == 1 }"
                        @click="analysisshow = 1"
                      >
                        Today
                      </li>
                      <li
                        :class="{ active: analysisshow == 2 }"
                        @click="analysisshow = 2"
                      >
                        This week
                      </li>
                      <li
                        :class="{ active: analysisshow == 3 }"
                        @click="analysisshow = 3"
                      >
                        This Month
                      </li>
                    </ul>
                    <table class="table table-striped table-hover table-bordered ">
                      <thead>
                        <tr>
                          <td></td>
                          <td>O.Qty</td>
                          <td>P.Qty</td>
                          <td>Amount</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item,index) in analysis" :key="index">
                          <td>{{index}}</td>
                          <td>

                                <span v-if="analysisshow == 1">
                                  {{item.today.order_quantity}}
                                </span>
                                 <span v-if="analysisshow == 2">
                                  {{item.this_week.order_quantity}}
                                </span>
                                 <span v-if="analysisshow == 3">
                                  {{item.this_month.order_quantity}}
                                </span>

                            </td>
                             <td>

                                <span v-if="analysisshow == 1">
                                  {{item.today.product_quanity}}
                                </span>
                                 <span v-if="analysisshow == 2">
                                  {{item.this_week.product_quanity}}
                                </span>
                                 <span v-if="analysisshow == 3">
                                  {{item.this_month.product_quanity}}
                                </span>

                            </td>
                             <td>

                                <span v-if="analysisshow == 1">
                                  {{item.today.amount}}
                                </span>
                                 <span v-if="analysisshow == 2">
                                  {{item.this_week.amount}}
                                </span>
                                 <span v-if="analysisshow == 3">
                                  {{item.this_month.amount}}
                                </span>

                            </td>

                        </tr>
                         <tr>


                          <td></td>
                          <td>
                            <span> = <b v-if="analysisshow == 1">
                                {{ parseInt( analysis.sale.today.order_quantity
                                  ? analysis.sale.today.order_quantity
                                  : 0)+  parseInt( analysis.wholesale.today.order_quantity
                                  ? analysis.wholesale.today.order_quantity
                                  : 0)+ parseInt( analysis.order.today.order_quantity
                                  ? analysis.order.today.order_quantity
                                  : 0)}}
                                  </b>

                                   <b v-if="analysisshow == 2">
                                {{ parseInt( analysis.sale.this_week.order_quantity
                                  ? analysis.sale.this_week.order_quantity
                                  : 0)+  parseInt( analysis.wholesale.this_week.order_quantity
                                  ? analysis.wholesale.this_week.order_quantity
                                  : 0)+ parseInt( analysis.order.this_week.order_quantity
                                  ? analysis.order.this_week.order_quantity
                                  : 0)}}

                                   </b>
                                    <b v-if="analysisshow == 3">
                                {{ parseInt( analysis.sale.this_month.order_quantity
                                  ? analysis.sale.this_month.order_quantity
                                  : 0)+  parseInt( analysis.wholesale.this_month.order_quantity
                                  ? analysis.wholesale.this_month.order_quantity
                                  : 0)+ parseInt( analysis.order.this_month.order_quantity
                                  ? analysis.order.this_month.order_quantity
                                  : 0)}}

                                    </b>

                              </span>
                          </td>
                             <td>
                            <span> = <b v-if="analysisshow == 1">
                                {{ parseInt( analysis.sale.today.product_quanity
                                  ? analysis.sale.today.product_quanity
                                  : 0)+  parseInt( analysis.wholesale.today.product_quanity
                                  ? analysis.wholesale.today.product_quanity
                                  : 0)+ parseInt( analysis.order.today.product_quanity
                                  ? analysis.order.today.product_quanity
                                  : 0)}}
                                  </b>

                                   <b v-if="analysisshow == 2">
                                {{ parseInt( analysis.sale.this_week.product_quanity
                                  ? analysis.sale.this_week.product_quanity
                                  : 0)+  parseInt( analysis.wholesale.this_week.product_quanity
                                  ? analysis.wholesale.this_week.product_quanity
                                  : 0)+ parseInt( analysis.order.this_week.product_quanity
                                  ? analysis.order.this_week.product_quanity
                                  : 0)}}

                                   </b>
                                    <b v-if="analysisshow == 3">
                                {{ parseInt( analysis.sale.this_month.product_quanity
                                  ? analysis.sale.this_month.product_quanity
                                  : 0)+  parseInt( analysis.wholesale.this_month.product_quanity
                                  ? analysis.wholesale.this_month.product_quanity
                                  : 0)+ parseInt( analysis.order.this_month.product_quanity
                                  ? analysis.order.this_month.product_quanity
                                  : 0)}}

                                    </b>

                              </span>
                          </td>
                              <td>
                            <span> = <b v-if="analysisshow == 1">
                                {{ parseInt( analysis.sale.today.amount
                                  ? analysis.sale.today.amount
                                  : 0)+  parseInt( analysis.wholesale.today.amount
                                  ? analysis.wholesale.today.amount
                                  : 0)+ parseInt( analysis.order.today.amount
                                  ? analysis.order.today.amount
                                  : 0)}}
                                  </b>

                                   <b v-if="analysisshow == 2">
                                {{ parseInt( analysis.sale.this_week.amount
                                  ? analysis.sale.this_week.amount
                                  : 0)+  parseInt( analysis.wholesale.this_week.amount
                                  ? analysis.wholesale.this_week.amount
                                  : 0)+ parseInt( analysis.order.this_week.amount
                                  ? analysis.order.this_week.amount
                                  : 0)}}

                                   </b>
                                    <b v-if="analysisshow == 3">
                                {{ parseInt( analysis.sale.this_month.amount
                                  ? analysis.sale.this_month.amount
                                  : 0)+  parseInt( analysis.wholesale.this_month.amount
                                  ? analysis.wholesale.this_month.amount
                                  : 0)+ parseInt( analysis.order.this_month.amount
                                  ? analysis.order.this_month.amount
                                  : 0)}}

                                    </b>

                              </span>
                          </td>

                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

