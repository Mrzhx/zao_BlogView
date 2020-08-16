
import { Admin } from '../pages/admin/Admin';
import { HomeIndex } from '../pages/home/index';
import { HomeList } from '../pages/home/content/HomeList';
import { ArticleDetail } from '../pages/home/content/article_detail/ArticleDetail';

export const routes = [
  {
    component: HomeIndex,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomeIndex,
        children: [
          {
            path: "/list",
            exact: true,
            component: HomeList,
          },
          {
            path: "/detail:id",
            exact: true,
            component: ArticleDetail,
          }
        ]
      },
      {
        path: "/admin",
        exact: true,
        component: Admin,
      }
    ]
  }
];
