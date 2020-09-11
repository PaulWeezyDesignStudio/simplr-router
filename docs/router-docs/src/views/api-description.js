import { html } from 'lit-element';
import { ViewTemplate } from './view-template.js';

export class RouterDocsApiDescription extends ViewTemplate {
    static get styles() {
        return [super.styles];
    }

    render() {
        return html`
            <h2>API description</h2>

            <p><b>SimplrRouter</b></p>

            <table>
                <tr>
                    <th>Method</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>new SimplrRouter()</td>
                    <td>
                        (options: <code>SimplrRouterOptions</code>) :
                        SimplrRouter
                    </td>
                    <td>
                        The Constructor method of Simplr Router. Takes the
                        <code>SimplrRouterOptions</code> object as a parameter.
                    </td>
                </tr>
                <tr>
                    <td>init()</td>
                    <td>() : void</td>
                    <td>
                        The initializer method of Simplr Router. No routing
                        action will be done before this is called. Loads up the
                        current url's view during initialization.
                    </td>
                </tr>
                <tr>
                    <td>changeView()</td>
                    <td>(viewName) : void</td>
                    <td>
                        A helper function to navigate to a new view
                        programmatically. Takes the path of the view as a
                        parameter. The format of the view should be the same as
                        it would be in a <code>a</code> -anchor tag
                    </td>
                </tr>
            </table>

            <p><b>Helper functions</b></p>

            <table>
                <tr>
                    <th>Method</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>changeView()</td>
                    <td>(viewName) : void</td>
                    <td>
                        A individually exported function, which calls the Simplr
                        Router function with the same name. Can be used to
                        easily programmatically move between views.
                    </td>
                </tr>
            </table>

            <p><b>SimplrRouterOptions</b></p>

            <table>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>transitionSpeed</code></td>
                    <td><code>number</code></td>
                    <td>
                        Determines the transition speed between views in
                        milliseconds. Defaults to 200.
                    </td>
                </tr>
                <tr>
                    <td><code>notFoundAction</code></td>
                    <td>function</td>
                    <td>
                        Function to be called, if the user navigates to a view
                        that is not found in the routes list. Defaults to null.
                    </td>
                </tr>
                <tr>
                    <td><code>forbiddenAction</code></td>
                    <td>function</td>
                    <td>
                        Function to be called, if the user navigates to a view
                        with a guard set, and fails the guard check. Defaults to
                        null.
                    </td>
                </tr>
                <tr>
                    <td><code>debugging</code></td>
                    <td>boolean</td>
                    <td>
                        If set to <code>true</code>, Simplr Router will log it's
                        actions into the developer console
                    </td>
                </tr>
                <tr>
                    <td><code>routes</code></td>
                    <td>Array</td>
                    <td>
                        An array of <code>Route</code> objects. Defines the
                        routes of Simplr Router.
                    </td>
                </tr>
            </table>

            <p><b>Route</b></p>

            <table>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>path</code></td>
                    <td>string</td>
                    <td>The URL path for the route e.g. "/getting-started"</td>
                </tr>
                <tr>
                    <td><code>component</code></td>
                    <td>string</td>
                    <td>
                        The name of the Web Component of wanted view object.
                        e.g. "router-docs-getting-started"
                    </td>
                </tr>
                <tr>
                    <td><code>import</code></td>
                    <td>string</td>
                    <td>
                        Simplr Router supports lazy component loading. You can
                        provide a <code>import</code> -property with your route,
                        pointing at the file containing your component to lazily
                        load it during routing. e.g. "/dist/second-module.js"
                    </td>
                </tr>
                <tr>
                    <td><code>guard</code></td>
                    <td>function</td>
                    <td>
                        A guard is a middleware, which is checked before loading
                        the route. If a guard is checked, it is evaluated before
                        loading the view. If a truthy value is returned by the
                        guard function, the view is loaded. If a falsy value is
                        returned, the <code>forbiddenAction</code> or
                        <code>forbiddenView</code> is loaded.
                    </td>
                </tr>
                <tr>
                    <td><code>routes</code></td>
                    <td>Array</td>
                    <td>
                        A array of subroutes, which inherit the guards and the
                        path from the parent Route. Read more about subroutes
                        <a href="#">here</a>.
                    </td>
                </tr>
            </table>
        `;
    }
}

if (!customElements.get('router-docs-api-description')) {
    customElements.define(
        'router-docs-api-description',
        RouterDocsApiDescription
    );
}
