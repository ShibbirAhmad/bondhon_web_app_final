import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [

     {
        path: '/member/login',
        component: () => import(/* webpackChunkName: "member_login" */'./components/member/Login.vue'),
        name: 'member_login',
        meta: {
            title: 'Login || Member of Bondhon '
        }

    },

    {
        path: '/member/dashboard',
        component: () => import(/* webpackChunkName: "member_dashboard" */'./components/member/Index.vue'),
        name: 'member_dashboard',
        meta: {
            authMember: true,
            title: 'Member Dashboard'
        }
    },

     {
        path: '/member/notice/info',
        component: () => import(/* webpackChunkName: "member_notice" */'./components/member/member/Notice.vue'),
        name: 'member_notice',
            meta: {
            title:"bondhon notice ",
            authMember: true
        }
    },

    {
        path: '/member/profile/info',
        component: () => import(/* webpackChunkName: "member_profile" */'./components/member/member/Profile.vue'),
        name: 'member_profile',
            meta: {
            title:"memeber details",
            authMember: true
        }
    },

    {
        path: '/member/profile/info/update',
        component: () => import(/* webpackChunkName: "member_edit_profile" */'./components/member/member/Edit.vue'),
        name: 'member_edit_profile',
            meta: {
            title:"memeber profile edit",
            authMember: true
        }
    },

      {
        path: '/member/password',
        component: () => import(/* webpackChunkName: "member_password" */'./components/member/member/Password.vue'),
        name: 'member_password',
            meta: {
            title:"memeber password",
            authMember: true
        }
    },

    {
        path: '/member/collection/history',
        component: () => import(/* webpackChunkName: "member_collection_history" */'./components/member/account/Collection.vue'),
        name: 'member_collection_history',
            meta: {
            title:"collection details",
            authMember: true
        }
    },


    {
        path: '/member/profit/history',
        component: () => import(/* webpackChunkName: "member_profit_history" */'./components/member/account/Profit.vue'),
        name: 'member_profit_history',
            meta: {
            title:"collection details",
            authMember: true
        }
    },


    {
        path: '/backend/dashboard',
        component: () => import(/* webpackChunkName: "admin_dashboard" */'./components/admin/Index.vue'),
        name: 'dashboard',
        meta: {
            requiresAuthAdmin: true,
            title: 'Dashboard'

        }
    },


     {
        path: '/backend/company/investment',
        name: 'investment',
        component: () => import(/* webpackChunkName: "investment" */'./components/admin/Investment/Index.vue'),
        meta: {
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/company/investment/add',
        name: 'investment_add',
        component: () => import(/* webpackChunkName: "investment_add" */'./components/admin/Investment/Add.vue'),
        meta: {
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/company/investment/edit/:id',
        name: 'edit_investor',
        component: () => import(/* webpackChunkName: "edit_investor" */'./components/admin/Investment/Edit.vue'),
        meta: {
            requiresAuthAdmin: true,
        }
    },

   {
        path: '/backend/company/investor/details/:id',
        name: 'investor_details',
        component: () => import(/* webpackChunkName: "investor_details" */'./components/admin/Investment/InvestorDetails.vue'),
        meta: {
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/category',
        component: () => import(/* webpackChunkName: "category" */'./components/admin/category/Category'),
        name: "category",
        meta: {
            requiresAuthAdmin: true,
            title: 'category'
        }
    },
    {
        path: '/backend/categoryEdit/:categoryId',
        component: () => import(/* webpackChunkName: "categoryedit" */'./components/admin/category/Edit'),
        name: "CategoryEdit",
        meta: {
            requiresAuthAdmin: true,
            title: 'category || edit'
        }
    },
    {
        path: '/backend/categoryAdd',
        component: () => import(/* webpackChunkName: "categoryAdd" */'./components/admin/category/Add'),
        name: "categoryAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'category || add'

        }
    },

    {
        path: '/backend/slider',
        component: () => import(/* webpackChunkName: "slider" */'./components/admin/slider/Slider'),
        name: 'slider',
        meta: {
            requiresAuthAdmin: true,
            title: 'slider'
        }
    },
    {
        path: '/backend/sliderAdd',
        component: () => import(/* webpackChunkName: "slider_add" */'./components/admin/slider/Add'),
        name: "sliderAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'slider || add'
        }
    },
    {
        path: '/backend/sliderEdit/:id',
        component: () => import(/* webpackChunkName: "slider_edit" */'./components/admin/slider/Edit'),
        name: 'sliderEdit',
        meta: {

            requiresAuthAdmin: true,
            title: 'slider || edit'
        }
    },

    {
        path: '/backend/user/list',
        component: () => import(/* webpackChunkName: "user"*/'./components/admin/user/index'),
        name: 'user',
        meta: {
            title: 'User | List',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/customer/list',
        component: () => import(/* webpackChunkName: "customer"*/'./components/admin/customer/index'),
        name: 'customer',
        meta: {
            title: 'customer | List',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/adminLogin',
        component: () => import(/* webpackChunkName: "admin_login" */'./components/admin/Login.vue'),
        name: 'adminLogin',
        meta: {
            title: 'Login || Admin'
        }

    },

    {
        path: '/backend/credit',
        component: () => import(/* webpackChunkName: "credit" */'./components/admin/credit/Credit'),
        name: 'credit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Credit'
        }

    },
    {
        path: '/backend/credit/due',
        component: () => import(/* webpackChunkName: "creditDue" */'./components/admin/credit/Due'),
        name: 'CreditDue',
        meta: {
            requiresAuthAdmin: true,
            title: 'Due| Credit'
        }

    },

    {
        path: '/backend/credit/add',
        component: () => import(/* webpackChunkName: "creditAdd" */'./components/admin/credit/Add'),
        name: 'creditAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add|credit'
        }

    },

    {
        path: '/backend/credit/edit/:id',
        component: () => import(/* webpackChunkName: "creditEdit" */'./components/admin/credit/Edit'),
        name: 'creditEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit"credit'
        }

    },

    {
        path: '/backend/debit',
        component: () => import(/* webpackChunkName: "debit" */'./components/admin/debit/Debit'),
        name: 'debit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Debit'
        }

    },
    {
        path: '/backend/debit/add',
        component: () => import(/* webpackChunkName: "debitAdd" */'./components/admin/debit/Add'),
        name: 'debitAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add|debit'
        }

    },

    {
        path: '/backend/debit/edit/:id',
        component: () => import(/* webpackChunkName: "debitEdit" */'./components/admin/debit/Edit'),
        name: 'debitEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit|Debit'
        }

    },


    {
        path: '/backend/role',
        component: () => import(/* webpackChunkName: "role" */'./components/admin/role/Role'),
        name: 'role',
        meta: {
            requiresAuthAdmin: true,
            title: 'Role'
        }

    },

    {
        path: '/backend/role/add',
        component: () => import(/* webpackChunkName: "roleAdd" */'./components/admin/role/Add'),
        name: 'roleAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'Add ROle'
        }

    },

    {
        path: '/backend/permissions/edit/role/:id',
        component: () => import(/* webpackChunkName: "editPermission" */'./components/admin/role/Permissions'),
        name: 'EditPermissions',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit| Permissions'
        }

    },

    {
        path: '/backend/found/transfer',
        component: () => import(/* webpackChunkName: "fondtransfer" */'./components/admin/fondtransfer/Index'),
        name: 'fondtransfer',
        meta: {
            requiresAuthAdmin: true,
            title: 'fondtransfer'
        }

    },
    {
        path: '/backend/found/transfer/add',
        component: () => import(/* webpackChunkName: "fondtransferAdd" */'./components/admin/fondtransfer/Add'),
        name: 'fondtransferAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'Add|ondtransfer'
        }

    },


    {
        path: '/backend/comment',
        component: () => import(/* webpackChunkName: "comment" */'./components/admin/comment/Comment'),
        name: 'comment',
        meta: {
            requiresAuthAdmin: true,
            title: 'comment'
        }

    },
    {
        path: '/backend/addComment',
        component: () => import(/* webpackChunkName: "commentAdd" */'./components/admin/comment/Add'),
        name: 'commentAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'comment || add'
        }
    },
    {
        path: '/backend/editComment/:id',
        component: () => import(/* webpackChunkName: "editComment" */'./components/admin/comment/Edit'),
        name: 'editComment',
        meta: {
            requiresAuthAdmin: true,
            title: 'comment edit'
        }
    },


    {
        path: '/backend/project',
        component: () => import(/* webpackChunkName: "project" */'./components/admin/project/Index.vue'),
        name: 'project',
        meta: {
            requiresAuthAdmin: true,
            title: 'Project'
        }

    },


    {
        path: '/backend/add/project',
        component: () => import(/* webpackChunkName: "project_add" */'./components/admin/project/Add.vue'),
        name: 'project_add',
        meta: {
            requiresAuthAdmin: true,
            title: 'project || add'
        }
    },

   {
        path: '/backend/project/edit/:id',
        component: () => import(/* webpackChunkName: "project_edit" */'./components/admin/project/Edit.vue'),
        name: 'project_edit',
        meta: {
            requiresAuthAdmin: true,
            title: 'project || edit'
        }
    },

     {
        path: '/backend/project/details/:id',
        component: () => import(/* webpackChunkName: "project_details" */'./components/admin/project/ProjectDetails.vue'),
        name: 'project_details',
        meta: {
            requiresAuthAdmin: true,
            title: 'project || details'
        }
    },


    {
        path: '/backend/carrier',
        component: () => import(/* webpackChunkName: "home_carrier" */'./components/admin/carrier/index'),
        name: 'home_carrier',
        meta: {
            title: 'Carrier | Home',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/carrier/add',
        component: () => import(/* webpackChunkName: "add_carrier" */'./components/admin/carrier/Add'),
        name: 'add_carrier',
        meta: {
            title: 'Carrier | Add',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/carrier/show/:id',
        component: () => import(/* webpackChunkName: "show_carrier" */'./components/admin/carrier/Show'),
        name: 'show_carrier',
        meta: {
            title: 'Carrier | show',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/carrier/edit/:id',
        component: () => import(/* webpackChunkName: "edit_carrier" */'./components/admin/carrier/Edit'),
        name: 'edit_carrier',
        meta: {
            title: 'Carrier | Home',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/job/post/applied/users/:id',
        component: () => import(/* webpackChunkName: "applied_user" */'./components/admin/carrier/jobApplied'),
        name: 'applied_users',
        meta: {
            title: 'Carrier | Applied User',
            requiresAuthAdmin: true,
        }
    },



    {
        path: '/backend/account/purpose',
        component: () => import(/* webpackChunkName: "account_purpose" */'./components/admin/account/AccountPurpose.vue'),
        name: 'account_purpose',
        meta: {
            title: 'Account | Purpose',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/account/purpose/add',
        component: () => import(/* webpackChunkName: "account_purpose_add" */'./components/admin/account/Add'),
        name: 'account_purpose_add',
        meta: {
            title: 'Account | Purpose Add',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/account/purpose/edit/:id',
        component: () => import(/* webpackChunkName: "accoun_purpose_edit" */'./components/admin/account/Edit'),
        name: 'account_purpose_edit',
        meta: {
            title: 'Account | Purpose edit',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/team/member',
        component: () => import(/* webpackChunkName: "team_member" */'./components/admin/team/index'),
        name: 'team_member',
        meta: {
            title: 'Team | Members',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/team/member/add',
        component: () => import(/* webpackChunkName: "add_team_member" */'./components/admin/team/Add'),
        name: 'add_team_member',
        meta: {
            title: 'Add | Member',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/team/member/edit/:id',
        component: () => import(/* webpackChunkName: "edit_team_member" */'./components/admin/team/Edit'),
        name: 'edit_team_member',
        meta: {
            title: 'Edit | Member',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/team/salary/:id',
        component: () => import(/* webpackChunkName: "teamsalary" */'./components/admin/team/Salary'),
        name: 'teamSalary',
        meta: {
            title: 'Team| Salary',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/team/salary/:id/:month',
        component: () => import(/* webpackChunkName: "salaryDetails" */'./components/admin/team/SalaryDetails'),
        name: 'SalaryDetails',
        meta: {
            title: 'Team| Salary',
            requiresAuthAdmin: true,
        }
    },



    {
        path: '/backend/profite/report',
        component: () => import(/* webpackChunkName: "profiteReport" */'./components/admin/Report/Profite'),
        name: 'ProfiteReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profite Report'
        }
    },

    {
        path: '/backend/sale/profite/report',
        component: () => import(/* webpackChunkName: "SaleProfite" */'./components/admin/Report/SaleProfite'),
        name: 'SaleProfite',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profite Report'
        }
    },
    {
        path: '/backend/order/profite/report',
        component: () => import(/* webpackChunkName: "OrderProfite" */'./components/admin/Report/OrderProfite'),
        name: 'OrderProfite',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profite Report'
        }
    },

    {
        path: '/backend/account/report',
        component: () => import(/* webpackChunkName: "AccountReport" */'./components/admin/Report/Account'),
        name: 'AccountReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Office|sale | Report'
        }
    },

    {
        path: '/backend/listAdmin',
        component: () => import(/* webpackChunkName: "admin" */'./components/admin/admin/Admin.vue'),
        name: 'admin',
        meta: {
            requiresAuthAdmin: true
        }

    },


     {
        path: '/backend/list/member',
        component: () => import(/* webpackChunkName: "bondhon_member" */'./components/admin/admin/Member.vue'),
        name: 'bondhon_member',
         meta: {
            title: 'member | list',
            requiresAuthAdmin: true
        }

    },


    {
        path: '/backend/admin/profile',
        component: () => import(/* webpackChunkName: "adminProfile" */'./components/admin/admin/AdminProfile.vue'),
        name: 'adminProfile',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profile | Admin'
        }

    },

    {
        path: '/backend/add/member',
        component: () => import(/* webpackChunkName: "member_add" */'./components/admin/admin/MemberAdd.vue'),
        name: 'member_add',
        meta: {
            requiresAuthAdmin: true,
            title : 'member add'
        }
    },

  {
        path: '/backend/add/admin',
        component: () => import(/* webpackChunkName: "admin_add" */'./components/admin/admin/AdminAdd.vue'),
        name: 'admin_add',
        meta: {
            requiresAuthAdmin: true,
               title : 'admin add'
        }
    },
      {
        path: '/backend/edit/admin/:adminId',
        component: () => import(/* webpackChunkName: "editAdmin" */'./components/admin/admin/AdminEdit.vue'),
        name: 'editAdmin',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/edit/member/:adminId',
        component: () => import(/* webpackChunkName: "edit_member" */'./components/admin/admin/EditMember.vue'),
        name: 'edit_member',
        meta: {
            requiresAuthAdmin: true
        }
    },
     {
        path: '/backend/admin/details/:id',
        component: () => import(/* webpackChunkName: "admin_profile" */'./components/admin/admin/AdminProfile.vue'),
        name: 'admin_profile',
            meta: {
            title:"memeber details",
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/member/details/:id',
        component: () => import(/* webpackChunkName: "bondhon_member_details" */'./components/admin/admin/MemberDetails.vue'),
        name: 'bondhon_member_details',
            meta: {
            title:"memeber details",
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/assign/role/admin/:id',
        component: () => import(/* webpackChunkName: "assingRoleAdmin" */'./components/admin/admin/Role'),
        name: 'AssignRoleAdmin',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/assign/admin/permission/:id',
        component: () => import(/* webpackChunkName: "assign_admin_permission" */'./components/admin/admin/AdminPermission'),
        name: 'assign_admin_permission',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/admin/password/:id',
        component: () => import(/* webpackChunkName: "passwordChange" */'./components/admin/admin/Password'),
        name: 'passwordChange',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/sms/campaign',
        component: () => import(/* webpackChunkName: "sms_campaign" */'./components/admin/sms/Send'),
        name: 'sms_campaign',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/subscriber/list',
        component: () => import(/* webpackChunkName: "subscriber_list" */'./components/admin/subscriber/Index'),
        name: 'subscriber_list',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/contact/message',
        component: () => import(/* webpackChunkName: "contact_messgae" */'./components/admin/contact/Index'),
        name: 'contact_message',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/contact/message/reply/:id',
        component: () => import(/* webpackChunkName: "contact_messgae_reply" */'./components/admin/contact/Reply'),
        name: 'contact_message_reply',
        meta: {
            requiresAuthAdmin: true
        }
    },


    {
        path: '/backend/loaner/add',
        component: () => import(/* webpackChunkName: "addLoan" */'./components/admin/loan/Add'),
        name: 'loaner_add',
        meta: {
            requiresAuthAdmin: true,
            title: 'loaner add',
        }
    },

    {
        path: '/backend/loaner/edit/:id',
        component: () => import(/* webpackChunkName: "addLoan" */'./components/admin/loan/edit'),
        name: 'loaner_edit',
        meta: {
            requiresAuthAdmin: true,
            title: 'loaner edit',
        }
    },

    {
        path: '/backend/loan/manage',
        component: () => import(/* webpackChunkName: "Loan" */'./components/admin/loan/Loan'),
        name: 'loan',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/loaner/detaials/:id',
        component: () => import(/* webpackChunkName: "LoanDetails" */'./components/admin/loan/LoanerDetails'),
        name: 'LoanerDetails',
        meta: {
            requiresAuthAdmin: true
        }
    },
    

    
    {
        path: '/backend/feature/banner',
        component: () => import(/* webpackChunkName: "feature_banner" */'./components/admin/feature_banner/Index.vue'),
        name: 'feature_banner',
        meta: {
            requiresAuthAdmin: true,
            title: 'feature banner'
        }
    },

    {
        path: '/backend/general/setting',
        component: () => import(/* webpackChunkName: "generl_setting" */'./components/admin/general_setting/General.vue'),
        name: 'general_setting',
        meta: {
            requiresAuthAdmin: true
        }
    },



    {
        path: '/backend/footer/info',
        name: 'footer_setting',
        component: () => import(/* webpackChunkName: "footer_setting" */'./components/admin/footer_setting/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },


     {
        path: '/backend/about/contact/info',
        name: 'about_and_contact',
        component: () => import(/* webpackChunkName: "about_and_contact"*/'./components/admin/page_info/AboutContact.vue'),
        meta: {
            requiresAuthAdmin: true
          }
     },

     {
        path: '/backend/aggreement/info',
        name: 'aggreement',
        component: () => import(/* webpackChunkName: "aggreement"*/'./components/admin/page_info/Aggrement.vue'),
        meta: {
            requiresAuthAdmin: true
        }
      },


      {
        path: '/backend/bill/statement',
        name: 'bill_statement',
        component: () => import(/*webpackChunkName: "bill_statement" */'./components/admin/bill_statement/Index.vue'),
        meta: {
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/bill/statement/add',
        name: 'bill_statement_add',
        component: () => import(/*webpackChunkName: "bill_statement_add" */'./components/admin/bill_statement/Add.vue'),
        meta: {
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/bill/statement/details/:id',
        name: 'bill_statement_details',
        component: () => import(/*webpackChunkName:"bill_statement_details"*/'./components/admin/bill_statement/BillDetails.vue'),
        meta: {
            requiresAuthAdmin: true,
        }
    },






]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuthAdmin)) {
        if (localStorage.getItem('admin_token')) {
            next()
            return
        }
        next('/backend/adminLogin')
    }
    else {
        next()
    }

   if (to.matched.some(record => record.meta.authMember)) {
        if (localStorage.getItem('member_token')) {
            next()
            return
        }
        next('/member/login')
    }
    else {
        next()
    }


})

export default router
