import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ArticleLandingComponent } from './article/article-landing/article-landing.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

const fallbackRoute: Route = {
	path: '**', component: HomepageComponent
};

const ContentRoutes: Routes = [
  { path: '', component: ArticleLandingComponent },
  { path: 'detail', component: ArticleDetailComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
];

const routes : Routes = [
	{ path: '', component: HomepageComponent, pathMatch: 'full' },
	{ path: 'home', component: HomepageComponent },
	{ path: 'about', component: AboutComponent },
  { path: 'article', component: ArticleComponent, children: ContentRoutes },
	fallbackRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
   RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
